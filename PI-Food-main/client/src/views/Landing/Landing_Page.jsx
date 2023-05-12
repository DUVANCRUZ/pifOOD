import React from "react"; 

import { Link } from "react-router-dom"; 

const Landing=()=> { 
  return (
    <div> 
      <h1>Welcome to my Food Web Page</h1> 
      <Link to="/home"> 
        <button>Enter</button> 
      </Link> 
    </div> 
  );
}
export default Landing;