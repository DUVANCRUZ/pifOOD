import React, { useState, useEffect } from "react";
import { postRecipe, getDiets } from "../../Redux/actions";
import validation from "./validation.jsx";
import { useDispatch, useSelector} from "react-redux";

const Form = ()=>{
  const dispatch= useDispatch();
  const diets = useSelector(state=> state.diets);

  const [recipeData, setRecipeData] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    steps: "",
    image: "",
    diets: []
  });
    
    useEffect(()=>{
      dispatch(getDiets())
    }, [])

    const [errors, setErrors] = useState({
        title: "", 
        summary: "",
        healthScore: "",
        steps:"",
        image: "",
        diets: ""
    })



    const handleInputChange= (event)=>{
        setRecipeData({
            ...recipeData,
            [event.target.name] : event.target.value
        })
        
        setErrors(validation({
            ...recipeData,
            [event.target.name] : event.target.value
        }))

    }

    const handleSelect = (event) => {
      const selectedDiet = event.target.value;
      if (!recipeData.diets.includes(selectedDiet)) {
        setRecipeData((prevData) => ({
          ...prevData,
          diets: [...prevData.diets, selectedDiet]
        }));
      }
    };

    const handleSubmit=(event) =>{
        event.preventDefault();
        console.log(recipeData);
        dispatch(postRecipe(recipeData)),
        alert("Recipe created");
        setRecipeData({
          title: "", 
          summary: "",
          healthScore: "",
          steps:[],
          image: "",
          diets: []
        })
        
    }

    const isFormValid = Object.values(errors).every(error => error === "");
   
    return(

        <form onSubmit={handleSubmit}>

            <div>
              <h1>Create my recipe</h1>
              
              <label htmlFor="title">Title:</label>
              <input 
                type="text" 
                name="title" 
                onChange={(event) => handleInputChange(event)} 
                value={recipeData.title} 
                placeholder="Write the recipe name"/>
              {errors.title && <p style={{color: "red"}} > {errors.title}</p>}
              
              <label htmlFor="summary">Summary:</label>
              <input 
                type="text" 
                name="summary" 
                onChange={(event) => handleInputChange(event)}  
                value={recipeData.summary} 
                placeholder="Write the recipe summary"/>
              {errors.summary && <p style={{color: "red"}} > {errors.summary}</p>}
              
              <label htmlFor="healthScore">Health Score:</label>
              <input  
                type="number" 
                name="healthScore" 
                onChange={(event) => handleInputChange(event)} 
                value={recipeData.healthScore} placeholder="Write the recipe Health Score"/>
              {errors.healthScore && <p style={{color: "red"}} > {errors.healthScore}</p>}
              
              
          
              <label htmlFor="image">Image:</label>
              <input  
                type="text" 
                name="image" 
                onChange={(event) => handleInputChange(event)}  
                value={recipeData.image} 
                placeholder="Write the URL image"/>
            {errors.image && <p style={{color: "red"}} > {errors.image}</p>}

            <label htmlFor="steps">Steps:</label>
              <input  
                type="textArea" 
                name="steps" 
                onChange={(event) => handleInputChange(event)}  
                value={recipeData.steps} 
                placeholder="Write the preparation steps of the recipe"/>
            {errors.steps && <p style={{color: "red"}} > {errors.steps}</p>}

            <label htmlFor="diets">Diets: </label>
            <select onChange={(event) => handleSelect(event)} >
             
              {diets.map((diet) => {
                return (<option value={diet.name} key={diet.name}>
                  {diet.name}
                </option>)
              })}
            </select>
            <ul><li>{recipeData.diets.map(diet=>diet + ", ")} </li> </ul>
            {errors.diets && <p style={{color: "red"}} > {errors.diets}</p>}

            </div>
           

            <button type="submit" disabled={!isFormValid}>Create Recipe</button>

          


        </form>
    )
}
export default Form