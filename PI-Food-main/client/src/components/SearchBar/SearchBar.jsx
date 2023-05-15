import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { getRecipeByName } from "../../Redux/actions";

export default function SearchBar(){
    const dispatch= useDispatch();
    const [name, setName]= useState("");

    const handleInputChange = (event)=>{
        event.preventDefault();
        setName(event.target.value);
    }
    const handleSearch = (event)=>{
        event.preventDefault();
        dispatch(getRecipeByName(name))
    }
    return(
        <div>
            <input type="text" 
                    placeholder="Search Recipe..." 
                    onChange={(event)=> handleInputChange(event)}/>
            <button type="submit"
                    onClick={(event)=> handleSearch(event)}> 
                    Search
                    </button>

        </div>
    )
}