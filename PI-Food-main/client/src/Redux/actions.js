import axios from "axios";
import { useSelector } from "react-redux";

export const GET_RECIPES= "GET_RECIPES";
export const FILTER_DIETS="FILTER_DIETS";
export const FILTER_CREATED= "FILTER_CREATED";
export const ORDER_BY_TITLE= "ORDER_BY_TITLE";
export const ORDER_BY_HEALTH= "ORDER_BY_HEALTH"


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

