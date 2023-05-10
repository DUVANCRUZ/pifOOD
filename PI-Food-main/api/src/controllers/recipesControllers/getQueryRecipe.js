/*La responsabilidad de este archivo es definir la funcion que se va a encargar de traer
a los personaje por Query y despues exportarlo para que lo reciba el archivo recipesControllers
si no existe este nombre arrojar error.*/

//importamos la funcion para obtener toda la info

const { getAllRecipes }= require("../getInfo")


const getQueryRecipe= async (req, res)=>{
    const {name}= req.query;
    const allRecipes= await getAllRecipes();
    try {
        if(!name) res.status(200).json(allRecipes);
        const recipesFilter= await allRecipes.filter(recipe=> recipe.title.toLowerCase()=== name.toLowerCase());
        if(recipesFilter.length===0) throw Error("No se encontro RECETA");
        res.status(200).json(recipesFilter)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
   
}
    


module.exports=getQueryRecipe