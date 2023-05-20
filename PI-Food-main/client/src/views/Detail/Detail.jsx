import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getDetails } from "../../Redux/actions";
import { Link, useParams } from "react-router-dom";

export default function Detail(){
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(async () => {
    await dispatch(getDetails(id));
  }, [dispatch]);
  const detail = useSelector(state => state.detail);
  console.log(detail.diets);

  return(
    <div>
      {detail && (
        <div>
          <p>Id: {detail.id}</p>
          <h2>{detail.title}</h2>
          <img src={detail.image} alt={detail.title}/>
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
           <button className='btn'>View Recipe Steps</button>
        </Link>
        <Link to={`/home`}>
           <button className='btn'>Back to Home</button>
        </Link>
        </div>
         
          
        </div>
      )}
    </div>
  );
}
