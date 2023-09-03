//Este archivo se encarga de pedir la info necesaria para que la puedan utilizar los controladores



require('dotenv').config(); // Cargamos las variables de entorno desde el archivo .env
//const axios= require("axios") //importamos axios
//const { API_KEY } = process.env; // Obtenemos las variables de entorno API_KEY y DB_HOST
//require('dotenv').config(); // Cargamos las variables de entorno desde el archivo .env 
const { Recipe, Diet} = require('../db.js') //importamos los modelos
//const { v4: uuidv4 } = require('uuid');

const getAllRecipes = async () => {
  try{
    const result = await Recipe.findAll({
    include: {
        model: Diet,
        attributes: ["name"],
        through: {
            attributes: []
        }
    }
    });

    const recipes = result.map((recipe) => {
        const recipeInfo = recipe.toJSON();
        const dietNames = recipe.diets.map((diet) => diet.name);
        recipeInfo.diets = dietNames;
        return recipeInfo;
    });

    return recipes;
} catch (error) {
  console.error('Error al obtener y guardar las recetas:', error);
  throw error;
}
};


// Definimos la función encargada de traer la información de la APImy guardarla 
/*const getAllRecipes= async ()=>{
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    const apiInfo = response.data.results.map((receta) => {
        const {  title, image, summary, healthScore, analyzedInstructions, diets } = receta;
        const id = uuidv4();
        return {
            id,
            title,
            image,
            summary,
            healthScore,
            steps: analyzedInstructions,
            diets
        };
    });

    // Guardar las recetas en la base de datos
    //await Recipe.bulkCreate(apiInfo);

    return apiInfo;
};
*/
const getInfoId= async (idRecipe) => {
  try {
    const findIdDB = await Recipe.findByPk(idRecipe, {
      include: {
        model: Diet,
        attributes: ["name"],
        through: { diets: [] },
      },
    });
  
    // Extrae los nombres de las dietas en forma de matriz
  
    const diets = findIdDB.diets.map((diet) => diet.name);
  
    return { ...findIdDB.toJSON(), diets };
  } catch (error) {
    console.log("Error al obtener la receta de la base de datos:", error);
  }
  };
  
  //este funcion va traer todas las dietas
  const getAllDiets=async()=>{
      const dietsSet= [...new Set([])]
      
      dietsSet.forEach(diet=>{
          Diet.find({
              where:{
                  name: diet
              }
          })
      })
      const allDiets= await Diet.findAll();
      return allDiets
  }
  

//trae las recetas y las guarada en la db
/*const getAllDiets=async()=>{
  const info= await getAllRecipes();
  const diets= info.map(recipe=> recipe.diets)
  const dietsSet= [...new Set([].concat(...diets))]
  dietsSet.forEach(diet=>{
      Diet.findOrCreate({
          where:{
              name: diet
            }
          })
      })
      const allDiets= await Diet.findAll();
      return allDiets
}*/

module.exports={ // Exportamos las funciones getAllRecipes, getApiInfo y getDBInfo
    getAllRecipes,
    getAllDiets,
    getInfoId
}

