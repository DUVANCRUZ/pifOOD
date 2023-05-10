/*La responsabilidad de este archivo es definir la funcion que se va a encargar de traer
todas las dietas y despues exportarlo para que lo reciba el archivo dietRouter
*/
const { getAllDiets }= require("../getInfo")

const getDiets=async(req, res)=>{
    try {
        const allDiets= await getAllDiets();
        res.status(200).json(allDiets)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={
    getDiets
}