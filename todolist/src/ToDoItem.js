import React from "react";

function ToDoItem({ inputText, index }) {
  return (
    <li className="input">
      <span className="inputText">
        &#160;
        {index + 1}
        &#160;
        {inputText}
      </span>
      <span className="dopElement">
        <span className="Accept">&#10004;</span>&#160;
        <span className="Close">&#10006;</span>
      </span>
    </li>
  );
}

export default ToDoItem;
