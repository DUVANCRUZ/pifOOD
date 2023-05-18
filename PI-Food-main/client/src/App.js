import React from 'react';
import {  Route, Routes, useLocation } from "react-router-dom";
import { Detail, Home, Landing, Form, Steps } from "./views/Index.js";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
 
  return (
    
      <div>
        {location.pathname !== "/" && <NavBar />}
        <Route exact path="/" render={()=><Landing/>}/>
        <Route  path="/detail/:id" render={()=><Detail/>}/>
        <Route path="/form" render={()=><Form/>}/>
        <Route  path="/home" render={()=><Home />} />     
        <Route  path="/steps/:id" render={()=><Steps />} />     
      </div>
   
  );
}

export default App;