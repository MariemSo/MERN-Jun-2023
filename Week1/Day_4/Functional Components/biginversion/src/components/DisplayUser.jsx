import React from 'react'

const DisplayUser = ({newUser})=> {
  return (
    <div>{JSON.stringify(newUser)}
        <p>User Name:{username}</p>
        <p>Email</p>
        <p>Password</p>
    </div>
  )
}

export default DisplayUser
