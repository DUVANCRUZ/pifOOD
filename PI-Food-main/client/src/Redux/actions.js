import axios from "axios";

export const GET_RECIPES= "GET_RECIPES";

export const getRecipes=()=>{
    return async function(dispatch){
        const recipesData= await axios.get("http://localhost:3001/recipes");
        const recipes= recipesData.data;
        console.log(recipes)
        dispatch({type: GET_RECIPES, payload: recipes})
    }
}
