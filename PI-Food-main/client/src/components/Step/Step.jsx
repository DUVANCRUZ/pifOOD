import React from "react";
import styles from "./Step.module.css";


export default function Step({ step, index }) {
  return (
    <div className={styles.container} >
      <h2>Step # {index+1}</h2>
      <h4>{step.step}</h4>
      <h4>Ingredients:</h4>
      {step.ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient.name}</p>
      ))}
      <h4>Duration:</h4>
      {step.length ? (
        <p>{step.length.number} {step.length.unit}</p>
      ) : (
        <p>No duration available</p>
      )}
    </div>
  );
}
