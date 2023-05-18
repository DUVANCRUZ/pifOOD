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
  console.log(detail.title);

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
          <p>Diets: {detail.diets}</p>
          <p>Health Score: {detail.healthScore}</p>
          <div>
        <Link to={`/steps/${detail.id}`}>
           <button className='btn'>View Recipe Steps</button>
        </Link>
        </div>
          <p>g</p>
          
        </div>
      )}
    </div>
  );
}
