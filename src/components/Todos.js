import React from 'react';
import './Todos.css'
import Todoitem from './Todoitem.js'

export default function Todos(props){
    let mystyle;
    if(props.mode==="dark"){
        mystyle = {backgroundColor: "#363636",minHeight: "75vh"}
    }
    else{
        mystyle = {backgroundColor: "white",minHeight: "75vh"}
    }
    return(
        <div className="py-2" style={mystyle}>
            <h3 className={`text-center ${props.mode==="dark"?"text-white":""} p-2`}>Todos list</h3>
            {props.todos.length===0? <p className={`m-2 text-center ${props.mode==="dark"?"text-white":""}`}>No todos to display</p>:
                props.todos.map((todo)=>{
                    return <Todoitem key={todo.sno} todo={todo} onDelete={props.onDelete} mode={props.mode}/>
                })
            }
        </div>
    )
}