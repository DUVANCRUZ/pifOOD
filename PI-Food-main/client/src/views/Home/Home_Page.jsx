import CardsContainer from "../../components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getRecipes } from "../../Redux/actions";


export default function Home() { 
  
  const dispatch= useDispatch();
  
  useEffect(()=>{
    dispatch(getRecipes())
  }, [])

  return (
    <div> 
      <h1>Welcome to my Home Web Page</h1> 
      <CardsContainer/>
    </div> 
  );
}