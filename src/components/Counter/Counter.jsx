import React from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  const [todocount,settodocount]=React.useState(count)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button  onClick={()=>settodocount(todocount+1) } data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{todocount}</span>
      <button onClick={()=>settodocount(todocount+1)} data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
