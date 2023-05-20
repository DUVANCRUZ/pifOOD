import CardsContainer from "../../components/CardsContainer/CardContainer";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {getRecipes,filterDiets, filterCreated, orderByHeath, orderByTitle} from "../../Redux/actions";
import styles from "./Home_Page.module.css"


export default function Home() { 

  const dispatch= useDispatch();
  const [orderTitle, setOrderTitle]= useState(``);
  const [orderHealth, setOrderHealth]= useState(``);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    dispatch(getRecipes())
  }, [])
  

  const handleFilterDiets=(event)=>{
    event.preventDefault();
    dispatch(filterDiets (event.target.value))
  }

  const handleFilterCreated=(event)=>{
    event.preventDefault();
    dispatch(filterCreated (event.target.value));

  }

  const handleOrderByTitle=(event)=>{
    event.preventDefault();
    dispatch(orderByTitle(event.target.value)); 
    setCurrentPage(1);
    setOrderHealth(`Order ${event.target.value}`)

  }

  const handleOrderByHealth=(event)=>{
    event.preventDefault();
    dispatch(orderByHeath(event.target.value))
    setCurrentPage(1);
    setOrderTitle(`Order ${event.target.value}`)
  }

  return (
    <div className={styles.container}> 
       <div className={styles.filters}>
                <select className={styles.select} onChange={event => handleOrderByTitle(event)}>
                    <option value="default">Alphabetical order</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
                <select className={styles.select} onChange={event => handleOrderByHealth(event)}>
                    <option value="default">Health Score</option>
                    <option value="Higher Score">Highest Score</option>
                    <option value="Lower Score">Lowest Score</option>
                </select>
                <select className={styles.select} onChange={event => handleFilterCreated(event)}  >
                    <option value="All">All</option>
                    <option value="created">Created</option>
                    <option value="api">From API</option>
                </select>
                <select  className={styles.select} onChange={event => handleFilterDiets(event)} >
                    <option value="All">All Diets</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="dairy free">Dairy Free</option>
                    <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="fodmap friendly">Low Fodmap</option>
                    <option value="whole 30">Whole 30</option>
                </select>
               
            </div>
      

      <CardsContainer/>
    </div> 
  );
}