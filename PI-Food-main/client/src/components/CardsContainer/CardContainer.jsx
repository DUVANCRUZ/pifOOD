import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import PagNumber from "../PagNumber/PagNumber";

export default function CardsContainer() {
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPage, setRecipesPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  console.log(currentRecipes)

  const pag = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
     <div>
      <PagNumber recipesPage={recipesPage} recipes={recipes.length} pag={pag} />
      </div>
      <div>
        {currentRecipes.map((recipe) => {
          const { id, title, image, healthScore, diets } = recipe;
          return (
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              healthScore={healthScore}
              diets={diets}
            />
          );
        })}
      </div>
     
    </div>
  );
}
