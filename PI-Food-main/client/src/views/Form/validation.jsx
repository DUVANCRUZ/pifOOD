
const validation = (recipeData, recipes) => {
  let errors = {};
  if (!recipeData.title) {
    errors.title = "Recipe name is required";
  } else if (recipeData.title.length < 7) {
    errors.title = "Recipe name must have at least 7 characters";
  } else if (recipes.some((recipe) => recipe.title === recipeData.title)) {
    errors.title = "Recipe already exists";
  }
  if (!recipeData.summary) {
    errors.summary = "Recipe summary is required";
  }
  if (recipeData.healthScore > 100 || recipeData.healthScore < 0) {
    errors.healthScore = "Recipe health score must be a value between 0 and 100";
  }
  if (!recipeData.image) {
    errors.image = "Recipe image is required";
  }
  return errors;
};

export default validation;
