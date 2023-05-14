import { GET_RECIPES, FILTER_DIETS, FILTER_CREATED } from "./actions"

const initialState= {
    recipes:[],
    allRecipes:[]
}

const rootReducer = (state= initialState, action)=>{
    switch (action.type) {
        case GET_RECIPES: 
            return {
                ...state, 
                recipes: action.payload,
                allRecipes: action.payload
            }
    
        case FILTER_DIETS: 
            const recipes= state.allRecipes;
            const recipeFind= [];
            let newRecipe=[];
            recipes.forEach(recipe=>{
                if(recipe.diets.includes(action.payload)) recipeFind.push(recipe)
            }                
            );

            action.payload==="All" 
            ? newRecipe=recipes
            : newRecipe= recipeFind
            return {
                ...state,
                recipes: newRecipe
            }
        case FILTER_CREATED:
            const recipes2= state.allRecipes;
            const createdFilter= 
                action.payload === "created"
                ? recipes2.filter(recipe=> recipe.createdByUser)
                : recipes2.filter(recipe=> !recipe.createdByUser);
            return {
                ...state,
                recipes: action.payload==="All"  
                        ? recipes2
                        : createdFilter   


            }

        default:
            return {...state}
    }

}

export default rootReducer