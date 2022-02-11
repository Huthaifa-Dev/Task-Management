import React, { useContext, useState } from "react";
import Tasks from "./Components/Items/Tasks";

import './App.css';
import NewTask from "./Components/NewItem/NewTask";
import TaskProvider from "./store/TaskProvider";
import TaskForm from "./Components/NewItem/TaskForm";

function App() {
  const [formActive, setFormActive] = useState(false);

  const formClickHandler = () => {
    setFormActive((prevState) => !prevState);
  }



  return (
    <TaskProvider>
      <div className="temp-nav"></div>
      <div className="todo-states">
        <Tasks state={'todo'} title='TODO' />
        <Tasks state={'inwork'} title='IN WORK' />
        <Tasks state={'qa'} title='QA' />
        <Tasks state={'completed'} title='COMPLETED' />
      </div>
      {!formActive ?
        <NewTask onClick={formClickHandler} /> :
        <TaskForm onClick={formClickHandler} />}
    </TaskProvider>
  );
}

export default App;
