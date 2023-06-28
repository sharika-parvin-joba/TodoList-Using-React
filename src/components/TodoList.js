import React from 'react'
import '../App.css'

const TodoList = (props) => {

  
  return(
    <>
    <div className='list'>

   
    <li>{props.text}</li>
    <i className='fa fa-times'
aria-hidden="true" onClick={()=>{
    props.onSelect(props.id)
}}/>
    </div>

    </>
  ) 
}

export default TodoList
