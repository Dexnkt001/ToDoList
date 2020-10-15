import React from "react";
import ToDoItem from "./ToDoItem.js";

function ToDoList() {
  let arr = [
    {
      id: 1,
      text: "lololo",
      status: "notActive",
    },
    {
      id: 2,
      text: "tkbkotmbmt",
      status: "notActive",
    },
    {
      id: 3,
      text: "opotktknp",
      status: "notActive",
    },
  ];
  return (
    <div className="ToDoList">
      <div className="AddNewElement">
        <button className="AddToDo" type="button">
          Add
        </button>
        <input type="text" />
      </div>
      <ul>
        {arr.map((element, index) => (
          <ToDoItem inputText={element.text} index={index} key={arr.id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
