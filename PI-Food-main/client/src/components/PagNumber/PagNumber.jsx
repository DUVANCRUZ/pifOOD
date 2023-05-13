import React from "react";

export default function PagNumber({recipesPage, recipes, pag}){
    const pagNumbers= [];

    for(let i=1;  i<=Math.ceil(recipes/recipesPage); i++) {
        pagNumbers.push(i)
    }

    return(
        <nav>
            <ul>
                {pagNumbers && 
                pagNumbers.map(number=>{
                    return (
                        <li key={number}>
                        <button onClick={() => pag(number)}>{number}</button>
                        </li>
                        
                    )
                })}


            </ul>



        </nav>
    )
}