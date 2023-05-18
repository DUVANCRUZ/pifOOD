import React from "react";
import useRecipeForm from "./FormFunctions";

const Form = () => {
  const {
    recipeData,
    errors,
    diets,
    handleInputChange,
    addSteps,
    deleteSteps,
    addIngredient,
    deleteIngredient,
    handleSelect,
    handleSubmit,
    isFormValid,
  } = useRecipeForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Create my recipe</h1>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={(event) => handleInputChange(event)}
          value={recipeData.title}
          placeholder="Write the recipe name"
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}

        <label htmlFor="summary">Summary:</label>
        <input
          type="text"
          name="summary"
          onChange={(event) => handleInputChange(event)}
          value={recipeData.summary}
          placeholder="Write the recipe summary"
        />
        {errors.summary && <p style={{ color: "red" }}>{errors.summary}</p>}

        <label htmlFor="healthScore">Health Score:</label>
        <input
          type="number"
          name="healthScore"
          onChange={(event) => handleInputChange(event)}
          value={recipeData.healthScore}
          placeholder="Write the recipe Health Score"
        />
        {errors.healthScore && (
          <p style={{ color: "red" }}>{errors.healthScore}</p>
        )}

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          onChange={(event) => handleInputChange(event)}
          value={recipeData.image}
          placeholder="Write the URL image"
        />
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}

        {recipeData.steps.map((step, stepIndex) => (
          <div key={stepIndex}>
            <label>Step {stepIndex + 1}:</label>
            <input
              type="text"
              name={`step-${stepIndex}`}
              onChange={(event) => handleInputChange(event, stepIndex)}
              value={step.step}
              placeholder={`Write the steps number ${stepIndex + 1}`}
            />

            <label>Time Minutes: </label>
            <input
              type="text"
              name={`time-${stepIndex}`}
              onChange={(event) => handleInputChange(event, stepIndex)}
              value={step.length.number}
              placeholder={`Write the time for step ${stepIndex + 1}`}
            />

            {step.ingredients.map((ingredient, ingredientIndex) => (
              <div key={ingredientIndex}>
                <label>Ingredient {ingredientIndex + 1}:</label>
                <input
                  type="text"
                  name={`ingredient-${stepIndex}-${ingredientIndex}`}
                  onChange={(event) =>
                    handleInputChange(event, stepIndex, ingredientIndex)
                  }
                  value={ingredient.name}
                  placeholder={`Write the ingredient number ${
                    ingredientIndex + 1
                  }`}
                />
                <button
                  type="button"
                  onClick={() => deleteIngredient(stepIndex, ingredientIndex)}
                >
                  Delete Ingredient
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addIngredient(stepIndex)}>
              Add Ingredient
            </button>
          </div>
        ))}

        <button type="button" onClick={deleteSteps}>
          Delete Step
        </button>
        <button type="button" onClick={addSteps}>
          Add steps
        </button>

        <label htmlFor="diets">Diets: </label>
        <select onChange={handleSelect}>
          {diets.map((diet) => (
            <option value={diet.name} key={diet.name}>
              {diet.name}
            </option>
          ))}
        </select>
        <ul>
          <li>{recipeData.diets.map((diet) => diet + ", ")}</li>
        </ul>
        {errors.diets && <p style={{ color: "red" }}>{errors.diets}</p>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Create Recipe
      </button>
    </form>
  );
};

export default Form;
