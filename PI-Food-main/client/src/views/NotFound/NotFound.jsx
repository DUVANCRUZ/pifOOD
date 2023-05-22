import React from "react";
import img from "../../Img/not found.jpg"
import styles from "./NotFound.module.css"

export default function NotFound() {
  return (
    <div className={styles.container} >
      <h1>Page Not Found</h1>
      <p>The requested page does not exist.</p>
      <img className={styles.img} src={img} />
      
      
    </div>
  );
}
