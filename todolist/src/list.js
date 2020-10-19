import React from 'react'
import ToDoItem from './ToDoItem'


function List(props){
    
return (
    <ul>
    {props.state.map((element, index) => <ToDoItem element = {element} index = {index} key = {index}/>)}
  </ul>
)
}

export default List;