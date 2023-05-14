import { GET_RECIPES, FILTER_DIETS } from "./actions"

const initialState= {
    recipes:[]
}

const rootReducer = (state= initialState, action)=>{
    switch (action.type) {
        case GET_RECIPES: 
            return {...state, recipes: action.payload}
    
        case FILTER_DIETS: 
            const recipes= state.recipes;
            const recipeFind= [];
            let newRecipe=[];
            recipes.forEach(recipe=>{
                if(recipe.diets.includes(action.payload)) recipeFind.push(recipe)
            }                
            );
            if(action.payload==="All"){
                newRecipe=recipes;
            }
            else{ newRecipe= recipeFind}
            return {
                ...state,
                recipes: newRecipe
            }

        default:
            return {...state}
    }

}

export default rootReducer