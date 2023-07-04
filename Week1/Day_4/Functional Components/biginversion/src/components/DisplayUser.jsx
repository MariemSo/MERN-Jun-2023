import React from 'react'


const DisplayUser = (props)=> {
  return (
    <div>
        <p>User Name: {props.newUser.username}</p>
        <p>Email {props.newUser.email}</p>
        <p>Password {props.newUser.password}</p>
    </div>
  )
}

export default DisplayUser
