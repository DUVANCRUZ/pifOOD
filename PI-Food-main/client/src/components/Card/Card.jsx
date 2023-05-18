import {Link} from "react-router-dom";

export default function Card({id,  title, image, healthScore, diets}) { 
    return (
      <div> 
        <h1>{title}</h1>
        <img src={image} alt='image not found'></img>
        <p>diets: {diets} </p>
        <p>healthScore: {healthScore} </p>
        <div>
        <Link to={`/detail/${id}`}>
           <button className='btn'>View Recipe</button>
        </Link>
        </div>
      </div> 
    );
  }   

  