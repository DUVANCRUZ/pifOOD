require('dotenv').config(); // Cargar las variables de entorno del archivo .env
const { Sequelize } = require('sequelize'); // Importar el objeto Sequelize
const fs = require('fs'); // Módulo de Node.js para trabajar con el sistema de archivos
const path = require('path'); // Módulo de Node.js para trabajar con rutas de archivos
const { DB_URL } = process.env; // Obtener las variables de entorno



// Crear una nueva instancia de Sequelize para conectarnos a la base de datos en Render

const sequelize = new Sequelize(
  `${ DB_URL }`,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true, // Requerir SSL/TLS
        rejectUnauthorized: false, // Deshabilitar la verificación del certificado (para desarrollo)
      },
    },
  }
);


const basename = path.basename(__filename); // Obtener el nombre del archivo actual

const modelDefiners = []; // Crear un arreglo para almacenar los modelos

// Leer todos los archivos de la carpeta 'models' y requerirlos, agregándolos al arreglo 'modelDefiners'
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyectar la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizar los nombres de los modelos, por ejemplo 'recipe' => 'Recipe'
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, Diet } = sequelize.models;

// Aquí se pueden definir las relaciones entre los modelos, como Recipe.belongsToMany(Ingredient)

Recipe.belongsToMany(Diet, { through: 'RecipeDiet' });
Diet.belongsToMany(Recipe, { through: 'RecipeDiet' });

module.exports = {
  ...sequelize.models, // Para poder importar los modelos así: const { Recipe, Ingredient } = require('./db.js');
  conn: sequelize, // Para importar la conexión así: { conn } = require('./db.js');
};
