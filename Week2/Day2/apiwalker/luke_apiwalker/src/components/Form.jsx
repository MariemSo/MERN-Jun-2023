import React ,{useState,useEffect} from "react";
import '../App.css';
import {useNavigate} from "react-router-dom";

const Form = () => {
    const [resources, setResources] = useState("");
    const [element, setElement] = useState("");
    const navigate =useNavigate();

    const submitHandle=(e)=>{
        e.preventDefault;
        navigate("/${resources}/${element}");
    }
    
    return (
    <div>
        <form onSubmit={submitHandle} className="Navbar">
            {/* Search Input */}
            <div>
                Search For : <label />
                <select onChange={ (e) => setResources(e.target.value) } value={resources}>
                        <option>People</option>
                        <option>Planets</option>
                </select>
            </div>

            {/* idInput */}
            <div>
                ID:<label/>
                <input type="number" onChange={ (e) => setElement(e.target.value) }value={element}/>
            </div>

            <input className="BnavSreach" type="submit" value="Search"/>
        </form>
    </div>
  );
};

export default Form;
