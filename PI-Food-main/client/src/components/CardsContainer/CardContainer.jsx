import Card from "../Card/Card";
import {useSelector} from "react-redux"



export default function CardsContainer() { 
    const recipes= useSelector(state=> state.recipes)
    console.log(recipes)

    return (
      <div> 
        {recipes.map(recipe=>{
          const {id,  title, image,  healthScore,  diets}=recipe;
          return <Card
            key={id}
            id={id}
            title={title}
            image={image}
            healthScore={healthScore}
            diets={diets}
          />



        }) }  
      </div> 
    );
  }   

  