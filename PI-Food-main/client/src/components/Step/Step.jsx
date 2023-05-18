import React from "react";

export default function Step({ step }) {
  return (
    <div>
      <h2>{step.step}</h2>
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
