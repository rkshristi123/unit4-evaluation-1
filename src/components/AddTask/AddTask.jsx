import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({handletodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo,setTodo]=React.useState("")
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={todo}
      onChange={(e)=>{
        setTodo(e.target.value)
      }}
       />
      <button   disabled={!todo}
     
      onClick={()=>{
        handletodo(todo)
        setTodo("")

      }}
       data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
