import axios from "axios";


export const GET_RECIPES= "GET_RECIPES";
export const FILTER_DIETS="FILTER_DIETS";
export const FILTER_CREATED= "FILTER_CREATED";
export const ORDER_BY_TITLE= "ORDER_BY_TITLE";
export const ORDER_BY_HEALTH= "ORDER_BY_HEALTH";
export const GET_RECIPE_BY_NAME= "GET_RECIPE_BY_NAME";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPE = "POST_RECIPE"


export const getRecipes=()=>{
    return async function(dispatch){
        try {
            const recipesData= await axios.get("http://localhost:3001/recipes");
            const recipes= recipesData.data;
            dispatch({
                type: GET_RECIPES, 
                payload: recipes
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}

export const filterDiets=(payload)=>{
    console.log(payload)
    return{
        type: FILTER_DIETS,
        payload
    }
    
}

export const filterCreated= (payload)=>{
    console.log(payload)
    return{
        type: FILTER_CREATED,
        payload
    }
    
}

export const orderByTitle= (payload)=>{
    console.log(payload);
    return{
        type: ORDER_BY_TITLE,
        payload
    }

}

export const orderByHeath= (payload)=>{
    console.log(payload);
    return{
        type: ORDER_BY_HEALTH,
        payload
    }

}

export const getRecipeByName= (name)=>{
    console.log(name)
    return async function(dispatch){
        try {
            const recipeData= await axios.get(`http://localhost:3001/recipes?name=${name}`)
            const recipe= recipeData.data;
            dispatch({
                type: GET_RECIPE_BY_NAME, 
                payload: recipe
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}

export const getDiets=()=>{
    return async function(dispatch){
        try {
            const dietsData= await axios.get(`http://localhost:3001/diets`)
            const diets= dietsData.data;
            console.log(diets)
            dispatch({
                type: GET_DIETS, 
                payload: diets
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}

export const postRecipe=(payload)=>{
    return async function(dispatch){
        try {
            const recipe= await axios.post(`http://localhost:3001/recipes`, payload)

            return recipe
        } catch (error) {
            console.log(error)
        }
       
    }
}
        
        
       

