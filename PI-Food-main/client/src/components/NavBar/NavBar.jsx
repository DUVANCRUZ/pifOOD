import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";


class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={styles.container} > 
                
                <div className={styles.buttons}  >
                <Link  to="/form">
                <button className={styles.button} >
                Create my Recipe
                </button>
                </Link>
                <Link to="/home">
                <button className={styles.button}>
                Home
                </button>
                </Link>
                </div>
                
                <SearchBar />
            </div>
            

        )
    }
}

export default NavBar;