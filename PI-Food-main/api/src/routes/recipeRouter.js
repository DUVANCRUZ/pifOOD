//La responsabilidad de este  archivo es definir las rutas de las recetas, para esto importa los 
//controllers de la carpeta recipeControllers  asignandoles a cada uno una ruta y una funcion
//despues exporta el recipeRouter para que lo reciba el index

const { Router } = require('express');
const {getIdRecipe, getQueryRecipe, postRecipe}= require("../controllers/recipesControllers/recipesControllers")


//traemos el router
const recipeRouter= Router();
//esta ruta obtiene las recetas por id
recipeRouter.get("/:idRecipe", getIdRecipe);
//esta ruta obtiene las recetas por query
recipeRouter.get("/", getQueryRecipe);
//esta ruta postea las recetas
recipeRouter.post("/", postRecipe)
//exportamos el recipeRouter para que lo importe el index
module.exports= recipeRouter