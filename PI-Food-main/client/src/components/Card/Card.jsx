export default function Card({id,  title, image, healthScore, diets}) { 
    return (
      <div> 
        <h1>{title}</h1>
        <img src={image} alt='image not found'></img>
        <p>diets: {diets} </p>
        <p>healthScore: {healthScore} </p>
      </div> 
    );
  }   

  