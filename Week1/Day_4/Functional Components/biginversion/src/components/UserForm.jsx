import React, { useState } from  'react';
import DisplayUser from './DisplayUser';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });
    const createUser=(e) =>{
        e.preventDefault();
        const newUser={firstName,lastName, email,password};
        setNewUser(newUser)
    }

    return(
        <div>
            <form onSubmit={(e)=>{createUser(e)}}>
                <div>
                    <label>First Name: </label> 
                    <input onChange={ (e) =>setFirstName(e.target.value) }value ={firstName}  />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input onChange={ (e) =>setLastName(e.target.value) }value ={lastName}  />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input onChange={ (e) => setEmail(e.target.value) } value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input  onChange={ (e) => setPassword(e.target.value)} value ={password}  />
                </div>

                <div>
                    <label>Password: </label>
                    <input  onChange={ (e) => setPassword(e.target.value)} value ={password}  />
                </div>
                <button>Create</button>
            </form>
        <DisplayUser newUser={newUser} />
        </div>
    );
};
    
export default UserForm;
