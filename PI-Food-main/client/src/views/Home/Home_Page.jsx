import CardsContainer from "../../components/CardsContainer/CardContainer";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getRecipes,filterDiets, filterCreated} from "../../Redux/actions";



export default function Home() { 
  const recipes = useSelector((state) => state.recipes);

  const dispatch= useDispatch();
   
  useEffect(()=>{
    dispatch(getRecipes())
  }, [])

  const handleFilterDiets=(event)=>{
    dispatch(filterDiets (event.target.value))
  }

  const handleFilterCreated=(event)=>{
    dispatch(filterCreated (event.target.value))
  }

  return (
    <div> 
       <div className="filters">
                <select>
                    <option value="default">-</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
                <select >
                    <option value="default">-</option>
                    <option value="Higher Score">Highest Score</option>
                    <option value="Lower Score">Lowest Score</option>
                </select>
                <select onChange={event => handleFilterCreated(event)}  >
                    <option value="All">All</option>
                    <option value="created">Created</option>
                    <option value="api">From API</option>
                </select>
                <select onChange={event => handleFilterDiets(event)} >
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
                <button>Aplicar filtros</button>
            </div>
      <h1>Welcome to my Home Web Page</h1> 

      <CardsContainer/>
    </div> 
  );
}