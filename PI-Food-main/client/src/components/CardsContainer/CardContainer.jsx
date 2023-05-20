import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import PagNumber from "../PagNumber/PagNumber";
import styles from "./CardContainer.module.css"

export default function CardsContainer() {
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);


  const pag = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div>
        <PagNumber
          prevPage={prevPage}
          nextPage={nextPage}
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes.length}
          pag={pag}
          currentPage={currentPage}
        />
      </div>
      <div className={styles.container}>
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
