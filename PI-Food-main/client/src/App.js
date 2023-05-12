import React from 'react';
import {  Route, Routes, useLocation } from "react-router-dom";
import { Detail, Home, Landing, Form } from "./views/Index.js";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
 
  return (
    
      <div>
        {location.pathname !== "/" && <NavBar />}
        <Route exact path="/" render={()=><Landing/>}/>
        <Route  path="/detail/:id" render={()=><Detail/>}/>
        <Route path="/create" render={()=><Form/>}/>
        <Route  path="/home" render={()=><Home />} />     
      </div>
   
  );
}

export default App;