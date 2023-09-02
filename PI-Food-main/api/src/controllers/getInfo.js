//Este archivo se encarga de pedir la info necesaria para que la puedan utilizar los controladores


require('dotenv').config(); // Cargamos las variables de entorno desde el archivo .env 
const { Recipe, Diet} = require('../db.js') //importamos los modelos



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





module.exports={ // Exportamos las funciones getAllRecipes, getApiInfo y getDBInfo
    getAllRecipes,
    getInfoId,
    getAllDiets
}