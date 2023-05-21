import React from "react"; 
import { Link } from "react-router-dom"; 
import styles from "./Landing.module.css";
import img from "../../Img/imagenBienvenida.png"

const Landing=()=> { 
  return (
    <div className={styles.container}> 
      <h1>Welcome to my Food Web Page</h1> 
      <img className={styles.img} src={img} />
      <Link to="/home"> 
        <button className={styles.button}>Enter</button> 
      </Link> 
    </div> 
  );
}
export default Landing;