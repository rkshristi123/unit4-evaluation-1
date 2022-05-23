import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({value,count,deletetodo,done}) => {
  // NOTE: do not delete `data-cy` key value pair
  const striked={}
 if(done=="true"){
   striked.textDecoration = "line-through"
 }
  return (
    <li data-cy="task" className={styles.task}>{value}
      <input type="checkbox" data-cy="task-checkbox" style={striked} />
      <div data-cy="task-text"></div>
      <Counter count={count}/>
      <button  onClick={()=>deletetodo(value)} data-cy="task-remove-button">del</button>
    </li>
  );
};

export default Task;
