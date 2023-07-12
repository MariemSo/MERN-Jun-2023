import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router-dom";

const Home = (props) => { 
  return (
    <div>
      <h1 className="App">Welcome</h1>
    </div>
  );
}

const RouteNum=(props)=>{
  const {element}=useParams();
  const {bgcolor}=useParams();
  const {color}=useParams();
  const matchingColor= {
    backgroundColor: bgcolor,
    color: color,
};
  if (isNaN(element)==false){
    return (
      <h1 className="App">The number is: {element}!</h1>
    );
  }
  else 
    return(
      <h1 className="App" style={matchingColor}>The world is: {element}!</h1>
    )
}

// const About = (props) => {
//   return (
//     <div>
//       <h1 style={{color: "blue"}}>About Component</h1>
//       <Link to={"/"}>Go Home</Link>
//     </div>
//   );
// }


    
function App() {
  return (
    <div>
{/* //       <h1>Routing Example</h1>
//       <p>
//         <Link to="/location/seattle">Seattle</Link>
        
//         <Link to="/location/chicago">Chicago</Link>
        
//         <Link to="/location/burbank">Burbank</Link>

//       </p> */}
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/:element/:bgcolor/:color" element={<RouteNum />} />
       </Routes> 
     </div>
  );
}
    
export default App
