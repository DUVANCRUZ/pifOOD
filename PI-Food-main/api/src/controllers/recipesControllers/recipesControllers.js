//La responsabilidad de este archivo es ordenar los controladores en un solo objeto para 
//facilitar su exportacion e importacion en la ruta de recipeRouter 

//importamos todas las rutas de la carpeta
const getIdRecipe= require("./getIdRecipe");
const getQueryRecipe= require("./getQueryRecipe");
const postRecipe= require("./postRecipe")

//Las guardamos en un solo objeto
const recipesControllers={
    getIdRecipe,
    getQueryRecipe,
    postRecipe
}

module.exports=recipesControllers