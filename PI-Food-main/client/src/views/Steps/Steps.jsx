import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/actions";
import { useParams, Link } from "react-router-dom";
import Step from "../../components/Step/Step";
import img from "../../Img/steps.jpg"
import styles from "./Steps.module.css"
import { all } from "axios";

export default function Steps() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  const detail = useSelector((state) => state.detail);
  const steps = detail.steps // Si detail.steps[0]?.steps no está definido, asignamos un array vacío
  return (
    
    
    <div className={styles.container}>
      <img className={styles.img} src={img}/>
      {steps &&  (
        steps.map((step, index) => (
          <Step key={index} step={step} index={index} />
          ))
          ) 
        }     
      <div className={styles.buttons}>
      <Link to={`/detail/${detail.id}`}>
           <button className={styles.button}>Back to Recipe Detail</button>
        </Link>
      <Link to={`/home`}>
           <button className={styles.button}>Back to Home</button>
       </Link>
    </div>
    </div>
  );
}
