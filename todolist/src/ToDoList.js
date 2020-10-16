import React from "react";
import ToDoItem from "./ToDoItem.js";
import { Button, InputGroup, FormControl } from "react-bootstrap"; 

function ToDoList() {
const [arr, plusArr]= React.useState(
  [
    {
      id: 1,
      text: "Никита",
      status: "notActive",
    },
    {
      id: 2,
      text: "Артем",
      status: "notActive",
    },
    {
      id: 3,
      text: "Влад",
      status: "notActive",
    },
  ]
)

function newSet(){
  plusArr (
     arr.map(element => element.text = element.text + 'lololol') 
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
           console.log(arr)
          return <ToDoItem inputText={element.text} index={index} key={element.id} />
})}
      </ul>
    </div>
  );
}

export default ToDoList;
