import React, { useState } from  'react';
import DisplayUser from './DisplayUser';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser]=useState({
        userName:"",
        email:"",
        password:"",
    });
    const createUser=(e) =>{
        e.preventDefault();
        const newUser={username, email,password};
        setNewUser(newUser);
    }

    return(
        <div>
            <form onSubmit={(e)=>{createUser(e)}}>
                <div>
                    <label>Username: </label> 
                    <input onChange={ (e) =>setUsername(e.target.value) }value ={username}  />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input onChange={ (e) => setEmail(e.target.value) } value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input  onChange={ (e) => setPassword(e.target.value)} value ={ password}  />
                </div>
                <button>Create</button>
            </form>
        <DisplayUser newUser={newUser} />
        </div>
    );
};
    
export default UserForm;
