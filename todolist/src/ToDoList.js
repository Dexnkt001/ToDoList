import React from "react";
import Context from './Context.js'
import List from './list.js'
import AddToDo from './Add.js'

function ToDoList() {
const [state, setstate]= React.useState(
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


function fun(id){
  setstate (
    state.map(element => {
      if (element.id === id && !element.status){
        element.status = !element.status
      } return element
    })
  )
}

// function funB(id){
//   setstate (
//     state.map(element => {
//       if (element.id === id && element.status){
//         element.status = !element.status
//       } return element
//     })
//   )
// }

function addToDo(text){
setstate(
  state.concat(
    [
      {
        id: state.length + 1,
        text,
        status:false,
      }
    ]
  )
)
}

function deleteToDo(id){
  setstate(state.filter(element => element.id !== id))
}

function reset(){
  setstate([]);
}


  return (
    <Context.Provider value = {{fun, deleteToDo}}>
    <div className="ToDoList">
    <AddToDo addToDo = {addToDo} reset = {reset}/>
      <List state = {state}/>
    </div>
    </Context.Provider>
  );
}

export default ToDoList;
