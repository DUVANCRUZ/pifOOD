/*La responsabilidad de este archivo es definir la funcion que se va a encargar de postear
a los personaje por Body y despues exportarlo para que lo reciba el archivo recipesControllers*/
const { Recipe, Diet} = require('../../db.js')


const postRecipe=async (req, res)=>{
    const { title, image, summary, healthScore, steps, diets } = req.body;
  
    try {
        const recipeCreated= await Recipe.create({
            title,
            image,
            summary,
            healthScore,
            steps,
        })
        const recipeDiet= await Diet.findAll({
            where: {
                name: diets
            }
        })
        
        recipeCreated.addDiet(recipeDiet);
        res.status(200).json(recipeCreated)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports=postRecipe
