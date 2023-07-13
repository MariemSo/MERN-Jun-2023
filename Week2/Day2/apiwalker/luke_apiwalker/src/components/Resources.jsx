import React from 'react'
import {useState} from "react";
import axios from 'axios';
import {resources} from "./Navbar";

const Resources = () => {

  return (
    <div>
        <h1>{resources.name}</h1>
        <h3>Height: {resources.height}</h3>
        <h3>Mass:{resources.mass}</h3>
        <h3>Hair Color: {resources.hair_color}</h3>
        <h3>Skin Color: {resources.skin_color}</h3>
    </div>
  )
}

export default Resources