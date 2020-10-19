import React, {useState} from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function AddToDo({addToDo, reset}){

const [value, setValue] = useState('');

function submitHandler(event){
event.preventDefault();

if(value.trim()){
    addToDo(value);
    setValue('')
}
}


    return(
        <div className='addAndReset'>
        <form className="AddNewElement" onSubmit = {submitHandler}>
        <Button type = "submit" className ='Add' variant="secondary" size = "sm" >Add</Button>
        <InputGroup size="sm" className="mb-1">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Add new ToDo</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl  value = {value} onChange ={event => setValue(event.target.value)} className='smallInput' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
      </form>
      <Button onClick={()=>{reset()}} className='Reset' variant='secondary'>ReSet</Button>
      </div>
    )
}

export default AddToDo;