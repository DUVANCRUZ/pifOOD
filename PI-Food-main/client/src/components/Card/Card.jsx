import {Link} from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({id,  title, image, healthScore, diets}) { 
    return (
      <div className={styles.container}> 
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.image} src={image} alt='image not found'></img>
        <h3>Diets: </h3> 
          {diets.map((diet, index) => (
          <p key={index}>{diet}</p>
          )
          )}
        <h3>HealthScore:  </h3>
        <p>{healthScore}</p>
        <div>
        <Link to={`/detail/${id}`}>
           <button className={styles.button}>View Recipe</button>
        </Link>
        </div>
      </div> 
    );
  }   

  