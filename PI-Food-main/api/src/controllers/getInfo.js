//Este archivo se encarga de pedir la info necesaria para que la puedan utilizar los controladores


require('dotenv').config(); // Cargamos las variables de entorno desde el archivo .env
const axios= require("axios") //importamos axios
const { API_KEY } = process.env; // Obtenemos las variables de entorno API_KEY y DB_HOST
const { Recipe, Diet} = require('../db.js') //importamos los modelos






// Definimos la función encargada de traer la información de la API
const getApiInfo= async ()=>{
    const response= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    const ApiInfo= await response.data.results.map((receta)=>{

        const { id, title, image, summary, healthScore, analyzedInstructions, diets}=receta // Desestructuramos los datos de cada receta
        return {
            id,
            title,
            image,
            summary,
            healthScore,
            steps: analyzedInstructions,
            diets
        }
    })
    return ApiInfo; // Retornamos la información de la API
}



// Definimos la función encargada de traer la información de la base de datos
const getDBInfo = async () => {
    const result = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [] // Excluimos los atributos de la tabla intermedia
            }
        }
    });

    const recipes = result.map((recipe) => {
        const recipeInfo = recipe.toJSON(); // Convertimos la receta a un objeto JSON
        const dietNames = recipe.diets.map((diet) => diet.name); // Obtenemos los nombres de las dietas asociadas
        recipeInfo.diets = dietNames; // Añadimos los nombres de las dietas al objeto de la receta
        return recipeInfo; // Retornamos la receta con los nombres de las dietas
    });

    return recipes;
};

// Definimos la función que obtiene la información de la API y de la base de datos y las concatena
const getAllRecipes= async ()=>{
    const apiInfo= await getApiInfo(); // Obtenemos la información de la API
    const dbInfo= await getDBInfo(); // Obtenemos la información de la base de datos
    const allInfo= apiInfo.concat(dbInfo); // Concatenamos las dos listas de información
    return allInfo// Retornamos la información concatenada
}

//Esta funcion va a atraer las recetas por Id
const getInfoId= async(idRecipe) =>{
   
    const findRecipeApi= await axios(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`);    
    if(findRecipeApi.data) return findRecipeApi.data;
    else{
    const findIdDB= await Recipe.findByPk(idRecipe, { 
        include: {
            model: Diet,
            attributes:["name"],
            through: { diets: [] }
        }
        });
        
        if(FindIdDb) return findIdDB
    }
    throw Error ("No se encontro esta receta")
}

//este funcion va traer todas las dietas
const getAllDiets=async()=>{
    const info= await getApiInfo();
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
}





module.exports={ // Exportamos las funciones getAllRecipes, getApiInfo y getDBInfo
    getAllRecipes,
    getApiInfo,
    getDBInfo,
    getInfoId,
    getAllDiets
}