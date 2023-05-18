import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDiets } from "../../Redux/actions";
import validation from "./validation.jsx";

const formFunctions = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const [recipeData, setRecipeData] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    steps: [
      {
        number: 1,
        step: "",
        ingredients: [{ name: "" }],
        length: {
          number: 0,
          unit: "minutes",
        },
      },
    ],
    image: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const [errors, setErrors] = useState({
    title: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    diets: "",
  });

  const handleInputChange = (event, stepIndex, ingredientIndex) => {
    const { name, value } = event.target;

    if (stepIndex !== undefined) {
      if (name.startsWith("step-")) {
        const stepsCopy = [...recipeData.steps];
        stepsCopy[stepIndex].step = value;
        setRecipeData({
          ...recipeData,
          steps: stepsCopy,
        });
      }
      if (name.startsWith("time-")) {
        const stepsCopy = [...recipeData.steps];
        stepsCopy[stepIndex].length.number = value;
        setRecipeData({
          ...recipeData,
          steps: stepsCopy,
        });
      }
    }
    if (ingredientIndex !== undefined) {
      const stepsCopy = [...recipeData.steps];
      stepsCopy[stepIndex].ingredients[ingredientIndex].name = value;
      setRecipeData({
        ...recipeData,
        steps: stepsCopy,
      });
    }

    setErrors(
      validation({
        ...recipeData,
        [name]: value,
      })
    );
  };

  const addSteps = () => {
    setRecipeData((prevData) => ({
      ...prevData,
      steps: [
        ...prevData.steps,
        {
          number: prevData.steps.length + 1,
          step: "",
          ingredients: [{ name: "" }],
          length: {
            number: 0,
            unit: "minutes",
          },
        },
      ],
    }));
  };

  const deleteSteps = () => {
    setRecipeData((prevData) => ({
      ...prevData,
      steps: prevData.steps.slice(0, -1),
    }));
  };

  const addIngredient = (stepIndex) => {
    setRecipeData((prevData) => {
      const stepsCopy = [...prevData.steps];
      stepsCopy[stepIndex].ingredients.push({ name: "" });
      return {
        ...prevData,
        steps: stepsCopy,
      };
    });
  };

  const deleteIngredient = (stepIndex, ingredientIndex) => {
    setRecipeData((prevData) => {
      const stepsCopy = [...prevData.steps];
      stepsCopy[stepIndex].ingredients.splice(ingredientIndex, 1);
      return {
        ...prevData,
        steps: stepsCopy,
      };
    });
  };

  const handleSelect = (event) => {
    const selectedDiet = event.target.value;
    if (!recipeData.diets.includes(selectedDiet)) {
      setRecipeData((prevData) => ({
        ...prevData,
        diets: [...prevData.diets, selectedDiet],
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postRecipe(recipeData));
    alert("Recipe created");
    setRecipeData({
      title: "",
      summary: "",
      healthScore: "",
      steps: [],
      image: "",
      diets: [],
    });
  };

  const isFormValid = Object.values(errors).every((error) => error === "");

  return {
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
  };
};

export default formFunctions;
