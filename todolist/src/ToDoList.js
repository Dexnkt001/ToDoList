import React from "react";
import ToDoItem from "./ToDoItem.js";
import { Button, InputGroup, FormControl } from "react-bootstrap"; 

function ToDoList() {
const [arr, plusArr]= React.useState(
  [
    {
      id: 1,
      text: "Никита",
      status: false,
    },
    {
      id: 2,
      text: "Артем",
      status: false,
    },
    {
      id: 3,
      text: "Влад",
      status: false,
    },
  ]
)

function newSet(){
  plusArr (
    arr.fi
  )
}

function fun(id){
  plusArr (
    arr.map(element => {
      if (element.id === id && !element.status){
        element.status = !element.status
      } return element
    })
  )
}

function funB(id){
  plusArr (
    arr.map(element => {
      if (element.id === id && element.status){
        element.status = !element.status
      } return element
    })
  )
}

  return (
    <div className="ToDoList">
      <div className="AddNewElement">
        <Button  onClick ={newSet} className ='Add' variant="secondary" size = "sm">Add</Button>
        <InputGroup size="sm" className="mb-1">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Add new ToDo</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl className='smallInput' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
      </div>
      <ul>
        {arr.map((element, index) => {
          return <ToDoItem funB = {funB} funA = {fun} element = {element} index = {index} key = {element.id}/>
})}
      </ul>
    </div>
  );
}

export default ToDoList;
