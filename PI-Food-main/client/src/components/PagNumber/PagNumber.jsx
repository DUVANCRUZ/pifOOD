import React from "react";

export default function PagNumber({recipesPage, recipes, pag}){
    //se crea el array de los numeros de pagina
    const pagNumbers= [];
    //se utiliza un for para ir pusheando numeros añ arry de paginado 
    //math ceil sirve para rendodear el numero recivido hacia arriba
    for(let i=1;  i<=Math.ceil(recipes/recipesPage); i++) {
        pagNumbers.push(i)
    }

    return(
        <nav>
            <ul>
                {pagNumbers && 
                pagNumbers.map(number=>{
                    return (
                     <button key={number} onClick={() => pag(number)}>{number}</button>    
                    )
                })}


            </ul>



        </nav>
    )
}