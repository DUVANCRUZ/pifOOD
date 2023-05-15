import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import PagNumber from "../PagNumber/PagNumber";

export default function CardsContainer() {
  const recipes = useSelector((state) => state.recipes);
  // se define el numero de la pagina
  const [currentPage, setCurrentPage] = useState(1);
  //se define la cantidad de recetas por pagina
  const recipesPage=9
//indice de la ultima receta
  const indexOfLastRecipe = currentPage * recipesPage;
  //indice de la primera receta
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPage;
  //se recorta el array para ver que recetas se van a mostrar
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  console.log(currentRecipes)
  //se define la variable var la cual setea el numetro de la pagina
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
