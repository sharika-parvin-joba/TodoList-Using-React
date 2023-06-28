import React, {useState} from "react"
import './App.css';
import TodoList from "./components/TodoList";


function App() {

  const [InputValue,setInputValue]=useState('')
  const [InputList,setInputList]=useState([])
  
  const itemsValue=(e)=>{
 setInputValue(e.target.value)
  }

  const btn=()=>{
  setInputList((oldItem)=>{
    return [...oldItem,InputValue]
  })
  setInputValue('')
  }

  const deleteItem=(id)=>{
    console.log('deleted')

    setInputList((oldItem)=>{
      return oldItem.filter((arrElem,index)=>{
  return index !== id
      })
    })
  }

  return (
   <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" onChange={itemsValue} value={InputValue} placeholder="Add a Item"/>
        <button onClick={btn}>+</button>

        <ol>
         {InputList.map((item,index)=>{
           return <TodoList 
           key={index}
           id={index}
           text={item}
           onSelect={deleteItem}
           />
         })
        }  
         
        </ol>
      </div>
      </div>
   </>
  );
}

export default App;
