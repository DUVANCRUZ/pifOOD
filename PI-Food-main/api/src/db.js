//La responsabilida de este archivo es levamtar la base de datos, asociarla con el servidor y
//crear las tablas y las relaciones

require('dotenv').config(); // Cargar las variables de entorno del archivo .env
const { Sequelize } = require('sequelize'); // Importar el objeto Sequelize
const fs = require('fs'); // Módulo de Node.js para trabajar con el sistema de archivos
const path = require('path'); // Módulo de Node.js para trabajar con rutas de archivos
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env; // Obtener las variables de entorno


console.log(DB_HOST)
console.log(DB_USER)
console.log(DB_PASSWORD)
console.log(DB_NAME)
// Crear una nueva instancia de Sequelize para conectarnos a la base de datos
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, 
  {
  
  logging: false, // Desactivar el logging de SQL queries
  native: false // Usar pg-native para mejorar la performance
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

// Injectar la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizar los nombres de los modelos, por ejemplo 'recipe' => 'Recipe'
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring



const { Recipe, Diet } = sequelize.models;






// Aquí se podrcb cían definir las relaciones entre los modelos, como Recipe.hasMany(Ingredient)

Recipe.belongsToMany(Diet, {through: 'RecipeDiet'});
Diet.belongsToMany(Recipe, {through: 'RecipeDiet'});


module.exports = {
  ...sequelize.models, // Para poder importar los modelos así: const { Recipe, Ingredient } = require('./db.js');
  conn: sequelize, // Para importar la conexión así: { conn } = require('./db.js');
}; 