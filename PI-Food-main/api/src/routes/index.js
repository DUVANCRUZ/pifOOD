//La responsabilidad de este ruta es definir las instancias principales de la rutas 
//imporando las recipeRouter y dietRouter para organizar las rutas de la aplicacion

const { Router } = require('express');
// Importar todos los routers;
const recipeRouter = require("./recipeRouter")
const dietRouter = require("./dietRouter")
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipeRouter);
router.use("/diets", dietRouter)


module.exports = router;
