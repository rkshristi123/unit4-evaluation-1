import React from "react";
import TaskApp from "./components/TaskApp";
import data from "./data/tasks";


function App() {
  return <div><TaskApp data={data}/></div>;

}

export default App;
