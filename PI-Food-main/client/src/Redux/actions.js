import axios from "axios";
import { useSelector } from "react-redux";

export const GET_RECIPES= "GET_RECIPES";
export const FILTER_DIETS="FILTER_DIETS"


export const getRecipes=()=>{
    return async function(dispatch){
        const recipesData= await axios.get("http://localhost:3001/recipes");
        const recipes= recipesData.data;
        dispatch({type: GET_RECIPES, payload: recipes})
    }
}

export const filterDiets=(payload)=>{
    console.log(payload)
    return{
        type: FILTER_DIETS,
        payload
    }
    
}