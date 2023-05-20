import React from 'react';
import { Route, Routes, useLocation, Switch } from "react-router-dom";
import { Detail, Home, Landing, Form, Steps, NotFound } from "./views/Index.js";
import NavBar from "./components/NavBar/NavBar";
import styles from './App.module.css'; 

function App() {
  const location = useLocation();
 
  return (
    <div className={styles.container}>
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route path="/detail/:id" render={() => <Detail />} />
        <Route path="/form" render={() => <Form />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/steps/:id" render={() => <Steps />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
