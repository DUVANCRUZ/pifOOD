import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div > 
                
                <div  >
                <button >
                <Link  to="/form">
                Create my Recipe
                </Link>
                </button>
                <button >
                <Link to="/home">
                Home
                </Link>
                </button>
                </div>
                
                <SearchBar />
            </div>
            

        )
    }
}

export default NavBar;