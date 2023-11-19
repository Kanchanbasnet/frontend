import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
          <BiEdit className='icon' id='update' onClick={updateMode} />
          <AiFillDelete className='icon'id= 'delete' onClick={deleteToDo} /> 
        </div>
    </div>
  )
}

export default ToDo;
