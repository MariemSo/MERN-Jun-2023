import React ,{useState,useEffect} from "react";
import axios from'axios';
import '../App.css';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { useParams } from "react-router-dom";
  
const Navbar = () => {

    const {element}=useParams();
    const [resources, setResources]= useState([]);
    useEffect(()=>{
      axiosPeople();
    },
    []
    )

    const axiosPeople =()=>{
        axios.get('https://swapi.dev/api/')
        .then((resp)=>{
            console.log(resp)
            setResources(Object.keys(resp.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }
    const submitHundle=()=>{
        useEffect(()=>{
            axios.get('https://swapi.dev/api/${resource}/${element}')
            .then((resp)=>{
                console.log(resp)
                setResources(Object.keys(resp.data))
            })
            .catch((err)=>{
                console.log(err)
            })
        })
    }
    return (
    <div>
        <form action="" className="Navbar">
            {/* Search Input */}
            <div>
                Search For People: <label />
                <select name="resources" >
                {resources.map((resources, i)=>{
                    return(
                        <option key={i} value="{resource}">{resources}</option>
                    )
                    })}
                </select>
            </div>
            {/* idInput */}

            <div>
                ID:<label/>
                <input type="number" value={element}/>
            </div>

            <button className="BnavSreach" type="button" onClick={submitHundle}>Search</button>
        </form>
    </div>
  );
};

export default Navbar;
