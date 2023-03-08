import React from 'react'
import { useState } from 'react'
import "../hojas-de-estilos/tarea.css"
function Tarea(props) {
    let idNumber = props.id
    let [text, setText] = useState(props.tarea)
    let [isEdit, setIsEdit] = useState(false)

    return (
      <div className='tarea-container'>
        {isEdit ?  <input className='input' onChange={ event =>{ setText(event.target.value)} } value={text} type="text"/>  : <p id='texto' className='tarea'>{text}</p>}
        
        <div className='buttons-container'>
            {isEdit ? <button className='add' onClick={ () => {setIsEdit(false)} }>Update</button> : <button onClick={ () => {setIsEdit(true)} } className='add'>Edit</button>}
            
            <button onClick={() => {
              props.onDelete(idNumber)
            }} className='delete'>Delete</button>
        </div>
      </div>
    )
  }


export default Tarea