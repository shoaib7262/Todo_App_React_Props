
import './App.css';

import React,{useState} from 'react';

import SideNavbar from './my Components/SideNavbar';
import { Routes, Route } from "react-router-dom";
import MyDay from './my Components/MyDay';
import CommingTask from './my Components/CommingTask';
import Important from './my Components/Important';
import DoneTask from './my Components/DoneTask';
import NewTask from './my Components/NewTask';



function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = (data) => {
    setTasks([...tasks, data]);
  }
 
  const deletItem =(todoItem)=>{
    let newArr = tasks.filter((item)=> item.id !== todoItem )
    
    setTasks(newArr)
  
  }

  const favrotIcon =(favItem)=>{
   
    let newTask = tasks.map((item)=>{
      
      if(item.id === favItem){
        
        return{
          ...item,
          liked: !item.liked,
        };
      }else{
        return item;
      }
      
      
    })
    setTasks(newTask);
    
  }

  return (
          
          <div className="app ">
          <SideNavbar />
         
          <Routes>
          <Route path="/" element={<MyDay tasks={tasks} deletItem={deletItem} favrotIcon={favrotIcon} />}  />
          <Route path="/comingtask" element={<CommingTask />} />
          <Route path="/important" element={<Important tasks={tasks} deletItem={deletItem} />} />
          <Route path="/donetask" element={<DoneTask />} />
          <Route path="/addtask" element={<NewTask addTask={addTask} />} />


        </Routes>
          </div>
          
                
          );
}

export default App;
