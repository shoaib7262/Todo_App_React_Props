import React, { useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";



const NewTask = (props) => {
  const [Title, setTitle] = useState('');
  const [Discription, setDiscription] = useState('');

  function onSubmit(){
    let data  = {id:(new Date()).getTime(),
      Title, Discription,
      liked:false, }

    if(!Title || !Discription){
      alert("please fill requirments*")
    }
    else{
    props.addTask(data);
    setTitle('');
    setDiscription('');
  }
  }

  return (
    <>
      <div className="newTask">
        <Header name="Please add new task..." />
        <InputForm setTitle={setTitle}  title={Title} setDiscription={setDiscription} Discription={Discription} />
        <div className="mx-5">
        <button type="button" className="btn btn-outline-danger rounded " onClick={onSubmit}>Submit</button>
        </div>
      </div>

     
    </>
  );
};

export default NewTask;
