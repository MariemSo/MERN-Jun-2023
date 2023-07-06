import React from 'react'


const DisplayUser = (props)=> {
  return (
    <div>
        <h3>Your Form Data</h3>
        <p>First Name: {props.newUser.firstName}</p>
        <p>Last Name: {props.newUser.lastName}</p>
        <p>Email: {props.newUser.email}</p>
        <p>Password: {props.newUser.password}</p>
        <p>Confirm Password: {props.newUser.confPassword}</p>
    </div>
  )
}

export default DisplayUser
