import React from 'react'

const Form = () => {
    const [fullName, setfullName] = useState("")

  return (
    <div>
        Your Name<label/>
        <input type="text" value={fullName}/>
    </div>
  )
}

export default Form