import React, {  useState ,useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const People = () => {
  const [people, setPeople]=useState([])
  const {element} = useParams();
  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/${element}')
    .then((res) => {
      console.log(res.data);
      setPeople(res.data)
  })
  .catch(err => {
      console.error(err);
      setPeople({ error: "you got only 82 species .. not their yet " })
  });
  },[element])
  return (
    <div>
      <h1>{people.name}</h1>
      <h3>Height: {people.height}</h3>
      <h3>Mass:{people.mass}</h3>
      <h3>Hair Color: {people.hair_color}</h3>
      <h3>Skin Color: {people.skin_color}</h3>
    </div>
  );
};

export default People;
