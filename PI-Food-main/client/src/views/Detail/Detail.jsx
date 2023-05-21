import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getDetails } from "../../Redux/actions";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css"
import img from "../../Img/detail.jpg"

export default function Detail(){
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(async () => {
    await dispatch(getDetails(id));
  }, [dispatch]);
  const detail = useSelector(state => state.detail);
  console.log(detail.diets);

  return(
    <div className={styles.container}>
      {detail && (
        <div className={styles.detail}>
          <p>Id: {detail.id}</p>
          <h2>{detail.title}</h2>
          <img className={styles.imgRecipe} src={detail.image} alt={detail.title}/>
          <details>
            <summary>Summary:</summary>
            <p dangerouslySetInnerHTML={{ __html: detail.summary }}/>
          </details>
          <h3>Diets: </h3> 
          {detail.diets && detail.diets.map((diet, index) => (
          <p key={index}>{diet}</p>
          )
          )}
          <h3>Health Score: </h3>
          <p>{detail.healthScore}</p>
          <div>
        <Link to={`/steps/${detail.id}`}>
           <button className={styles.button }>View Recipe Steps</button>
        </Link>
        <Link to={`/home`}>
           <button className={styles.button }>Back to Home</button>
        </Link>
        </div>
          
        </div>

      )}
      <img className={styles.img} src={img} />
    </div>
  );
}
