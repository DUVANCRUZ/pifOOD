import {Link} from "react-router-dom";

export default function Card({id,  title, image, healthScore, diets}) { 
    return (
      <div> 
        <h1>{title}</h1>
        <img src={image} alt='image not found'></img>
        <h3>Diets: </h3> 
          {diets.map((diet, index) => (
          <p key={index}>{diet}</p>
          )
          )}
        <h3>HealthScore:  </h3>
        <p>{healthScore}</p>
        <div>
        <Link to={`/detail/${id}`}>
           <button className='btn'>View Recipe</button>
        </Link>
        </div>
      </div> 
    );
  }   

  