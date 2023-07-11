import React,{useState} from 'react'

const ToDoList = () => {

    const [tasks, setTasks]=useState([
      {title: "task1", state:false},
      {title: "task2", state:false}
    ])

    const [newTask, setNewTask]=useState("")

    const hundleSubmit=(e)=>{
        e.preventDefault();
        setTasks([...tasks,{title:newTask,state:false}])
        setNewTask("")
      }
    const deleteTask=(e,i)=>{
      e.preventDefault();
      console.log(i);

      const updatedTasks = [...tasks];
      updatedTasks.splice(i, 1); 
      setTasks(updatedTasks);
    }
    const complete=(e,i)=>{
      e.preventDefault()
      const completedTasks = [...tasks];
      completedTasks[i].state=! completedTasks[i].state;
      setTasks(completedTasks);

    }
  return (
    <div>
        <form onSubmit={hundleSubmit}>
            <label>Add a New Task:</label>
            <input type='text' onChange={ (e) => setNewTask(e.target.value) } value={ newTask} />
            <input type='submit' value="Add"/>
        </form>
        <ul>
            {tasks.map((task,i)=>
            <li key={i} className={task.state?'completed':''}>
                <input type="checkbox" checked={task.state} onChange={(e) => {complete(e,i)}}/>
                {task.title}
                <input type={'button'} onClick={(e)=>{deleteTask(e,i)}} value={"Delete"}/>
                
            </li>
            )}
        </ul>
    </div>
  )
}

export default ToDoList