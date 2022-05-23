import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
const Tasks = ({value,count,deletetodo,done}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        <Task value={value} count={count} deletetodo={deletetodo} done={done}/>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
