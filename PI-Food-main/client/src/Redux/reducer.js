import { GET_DETAILS, POST_RECIPE, GET_DIETS, GET_RECIPES, FILTER_DIETS, FILTER_CREATED, ORDER_BY_TITLE, ORDER_BY_HEALTH, GET_RECIPE_BY_NAME } from "./actions"

const initialState= {
    recipes:[],
    allRecipes:[],
    diets: [],
    detail: []
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
        case ORDER_BY_TITLE:
            const recipes3= state.allRecipes;
            let orderByTitle=[]
            if(  action.payload === "asc"){
                orderByTitle=recipes3.sort((a, b)=>{
                if(a.title> b.title) return 1
                else return -1
                } )
            } 
            else if( action.payload === "desc"){
                orderByTitle=recipes3.sort((a, b)=>{
                if(a.title< b.title) return 1
                else return -1
                } )
            }
            return {
                ...state,
                recipes: orderByTitle
            }
        case ORDER_BY_HEALTH:
            const recipes4= state.allRecipes;
            let orderByHealth=[]
            if(  action.payload === "Higher Score"){
                orderByHealth=recipes4.sort((a, b)=>{
                if(a.healthScore<b.healthScore) return 1
                else return -1
                } )
            } 
            else if( action.payload === "Lower Score"){
                orderByHealth=recipes4.sort((a, b)=>{
                if(a.healthScore>b.healthScore) return 1
                else return -1
                } )
            }
            return {
                ...state,
                recipes: orderByHealth
            }
        
        case GET_RECIPE_BY_NAME:
            return {
                ...state,
                recipes: action.payload
            }
        case POST_RECIPE:
            return{
                ...state
            }
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return {...state}
    }

}

export default rootReducer