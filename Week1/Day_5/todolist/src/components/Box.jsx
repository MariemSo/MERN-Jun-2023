import React ,{useState} from 'react'

const Box = () => {
 
    const [bgcolor, setBgColor]=useState("")
    const [boxes, setBoxes] = useState ([])

    const styleBox = {
        height: "30px",
        width: "30px",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    const hundleSubmit=(e)=>{
        e.preventDefault();
        setBoxes([...boxes, bgcolor])
        setBgColor('')
    }

    return (
      <>
        <form onSubmit={hundleSubmit}>
            <label>Color:</label>
            <input type='text' onChange={ (e) => setBgColor(e.target.value) } value={ bgcolor } />
            <input type='submit' value="Add"/>
        </form><br />
        {boxes.map((boxColor, i)=>
        <span key={i} style={{...styleBox, backgroundColor: boxColor}}></span>
        )}
      </>
    );
  }
export default Box