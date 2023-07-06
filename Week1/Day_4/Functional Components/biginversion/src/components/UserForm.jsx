import React, { useState } from  'react';
import DisplayUser from './DisplayUser';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fNameError, setFnameError]= useState("");
    const [lastName, setLastName] = useState("");
    const [lNameError, setLnameError]= useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError]= useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError]= useState("");
    const [confPassword, setConfPassword ]=useState("");
    const [confPasswordError, setConfPasswordError ]=useState("");
    const [newUser, setNewUser]=useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const firstNameValidation = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFnameError("First Name must be 2 characters or longer!");
        } else {
            setFnameError("");
        }
    }

    const lastNameValidation = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLnameError("Last Name must be 2 characters or longer!");
        } else {
            setLnameError("");
        }
    }

    const emailValidation = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    
    const passwordValidation = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
            setConfPasswordError("");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
            setConfPasswordError("");
        } else {
            setPasswordError("");
            if(confPassword && confPassword != e.target.value) {
                setConfPasswordError("Password must Match");
            } else {
                setConfPasswordError("");
            }
        }
       
       
    }

    const ConfPasswordValidation= (e) => {
        setConfPassword(e.target.value);
        if(password != e.target.value) {
            setConfPasswordError("Password must Match");
        } else {
            setConfPasswordError("");
        }
    }
    const createUser=(e) =>{
        e.preventDefault();
        const newUser={firstName,lastName, email,password,confPassword};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setNewUser(newUser);
        setHasBeenSubmitted( true );
    }

    return(
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) =>firstNameValidation(e)} />
                    {fNameError?
                    <p>{fNameError}</p>:''}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input onChange={ (e) =>lastNameValidation(e) } />
                    {lNameError?
                    <p>{lNameError}</p>:''}
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input onChange={ (e) => emailValidation(e) } />
                    {emailError?
                    <p>{emailError}</p>:''}
                </div>
                <div>
                    <label>Password: </label>
                    <input  onChange={ (e) => passwordValidation(e)} />
                    {passwordError?
                    <p>{passwordError}</p>:''}<br/>
                    {confPasswordError?
                    <p>{confPasswordError}</p>:''}
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input  onChange={ (e) => ConfPasswordValidation(e)} />
                </div>
                <input type="submit" value="Create User"/>
            </form>
        <DisplayUser newUser={newUser} />
        </div>
    );
};
    
export default UserForm;
