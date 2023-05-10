//La responsabilidad de este  archivo es definir las rutas de las dietas,
// para esto importa los 
//controllers de la carpeta dietControllers  asignandoles a cada uno una ruta y una funcion
//despues exporta el dietRouter para que lo reciba el index


const { Router } = require('express');
const { getDiets } = require('../controllers/dietsControllers/getDiets.js');


//traemos el router
const dietRouter= Router();
//esta ruta obtiene todas las dietas
dietRouter.get("/", getDiets);

//exportamos el recipeRouter para que lo importe el index
module.exports= dietRouter