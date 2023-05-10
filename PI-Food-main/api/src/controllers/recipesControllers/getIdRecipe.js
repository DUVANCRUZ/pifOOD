/*La responsabilidad de este archivo es definir la funcion que se va a encargar de traer
a los personaje por ID y despues exportarlo para que lo reciba el archivo reciperControllers*/

const {getInfoId}= require("../getInfo")


const getIdRecipe= async (req, res)=>{
    const {idRecipe} = req.params;
   
    try {
        const findRecipeId= await getInfoId(idRecipe)
        res.status(200).json(findRecipeId)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports=getIdRecipe