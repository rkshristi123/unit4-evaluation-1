import React from "react";
import TaskHeader from "./TaskHeader/TaskHeader"
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import { v4 as uuidv4 } from 'uuid';

const TaskApp = ({data}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [todoarr,setTodoarr] =React.useState(data)
  
  const handletodo=(todo)=>{
    setTodoarr([...todoarr,{text:todo,id:uuidv4(),count:1, done:false}])

  }

  const deletetodo = (value)=>{
    let newtodo= todoarr.filter((el) => el.value!==value)
    setTodoarr(newtodo)
  }
   console.log(todoarr)
  // console.log(data)
  return (
    <div data-cy="task-app" className={styles.taskApp}>

      <TaskHeader/>
  
      <AddTask  handletodo={handletodo}/>
      {todoarr.map((el)=>(
       
         <Tasks key={el.id} value={el.text} count={el.count} deletetodo={deletetodo} done={el.done}/>
      ))}
    
    </div>
  );
};

export default TaskApp;
