//la responsabilidad de este archivo es crear el server y agregar los Middleware para manejar errores

const express = require('express'); // Importamos Express
const cookieParser = require('cookie-parser'); // Importamos cookie-parser para manejar cookies
const bodyParser = require('body-parser'); // Importamos body-parser para manejar el body de las peticiones
const morgan = require('morgan'); // Importamos morgan para hacer logs
const routes = require('./routes/index.js'); // Importamos las rutas

require('./db.js'); // Importamos la conexión a la base de datos

const server = express(); // Creamos una instancia de Express

server.name = 'API'; // Asignamos un nombre a la instancia de Express

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // Configuramos body-parser para parsear el body de las peticiones con urlencoded
server.use(bodyParser.json({ limit: '50mb' })); // Configuramos body-parser para parsear el body de las peticiones con JSON
server.use(cookieParser()); // Configuramos cookie-parser para manejar cookies
server.use(morgan('dev')); // Configuramos morgan para hacer logs en modo "dev"
server.use((req, res, next) => { // Creamos un middleware para agregar headers a las respuestas
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Agregamos el header "Access-Control-Allow-Origin" con el valor "http://localhost:3000"
  res.header('Access-Control-Allow-Credentials', 'true'); // Agregamos el header "Access-Control-Allow-Credentials" con el valor "true"
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Agregamos el header "Access-Control-Allow-Headers" con los valores "Origin", "X-Requested-With", "Content-Type" y "Accept"
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // Agregamos el header "Access-Control-Allow-Methods" con los métodos HTTP permitidos
  next(); // Llamamos a la siguiente función middleware
});

server.use('/', routes); // Configuramos las rutas

// Middleware para manejar errores
server.use((err, req, res, next) => {
  const status = err.status || 500; // Obtenemos el código de estado HTTP del error, o 500 si no está definido
  const message = err.message || err; // Obtenemos el mensaje de error, o el error en sí si el mensaje no está definido
  console.error(err); // Imprimimos el error en la consola
  res.status(status).send(message); // Enviamos el mensaje de error con el código de estado HTTP correspondiente
});

module.exports= server;