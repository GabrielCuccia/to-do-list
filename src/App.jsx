import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tarea from './components/tarea'

function App() {
  let [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])
  function addTask(event){
    event.preventDefault()
    setTasks([...tasks, task])
    
    console.log(tasks)
    
  }
  function deleteTask(idNumber){
    console.log(idNumber)
    let newTasks = tasks.filter((item) => item.id !== idNumber)
    setTasks(newTasks)  
  }
  function numberRandom(){
    return Math.floor(Math.random() * 10**16).toString(16)
  }
  return (
    <div className="App">
      <section className='appContent'>
        <form className='form' >
          <input id='input' onChange={(event) => setTask({ tareaDescription: event.target.value, id: numberRandom()})} className='form-input' type="text" />
          <button onClick={addTask} className='form-add'>Create todo</button>
        </form>
        <div className='tareas-container'>
          {tasks.map((item, index) => (
            <Tarea id = {item.id}  onDelete = {deleteTask}  key={item.id} tarea={item.tareaDescription} />
          ))}
          
          
        </div>
      </section>
      
    </div>
  )
}

export default App
