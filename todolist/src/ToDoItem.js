import React, {useContext} from "react";
import Context from './Context'

function ToDoItem({element, index}) {
const classes = ['input'];
const {fun, deleteToDo} = useContext(Context);


if (element.status){
  classes.push('done')
}

console.log(element.id, '    ', classes)
  return (
    <li className={classes.join(' ')} >
      <span className="inputText">
        &#160;
        {index + 1}
        &#160;
        {element.text}
      </span>
      <span className="dopElement">
        <span onClick={() => fun(element.id)} className="Accept">&#10004;</span>&#160;
        <span onClick={() => deleteToDo(element.id)} className="Close">&#10006;</span>
      </span>
    </li>
  );
}

export default ToDoItem;
