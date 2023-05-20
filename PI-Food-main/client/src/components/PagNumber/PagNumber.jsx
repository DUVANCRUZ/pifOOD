import React from "react";
import styles from "./PagNumber.module.css";

export default function PagNumber({
  recipesPerPage,
  totalRecipes,
  pag,
  currentPage,
  prevPage,
  nextPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.container}>
      <ul>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={styles.button}
        >
          Prev
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => pag(number)}
            className={`${styles.button} ${currentPage === number ? styles.active : ""}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === pageNumbers.length}
          className={styles.button}
        >
          Next
        </button>
      </ul>
    </nav>
  );
}
