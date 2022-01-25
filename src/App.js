import React, { useState } from "react";
import TasksFilter from "./Components/Filters/TasksFilter";
import Tasks from "./Components/Items/Tasks";
import TaskForm from "./Components/NewItem/TaskForm";
import './css/all.css';
import './App.css';

function App() {
  const DUMP_TASKS = [
    {
      'title': 'Complete Dailies',
      'state': 'available'
    },
    {
      'title': 'Empty Resin',
      'state': 'checked'
    }
  ];


  const [tasks, setTasks] = useState(DUMP_TASKS);
  const [filter, setFilter] = useState('all');

  const transferData = (data) => {
    setTasks((prevTasks) => {
      return [data, ...prevTasks];
    })
  }

  const deleteHandle = (input) => {
    var index = tasks.indexOf(input);
    if (index !== -1) {
      const newTasks = tasks.map((task) => {
        task.state = task.title === input.title ? 'deleted' : task.state;
        return task;
      })
      setTasks(newTasks);

    }
  }

  const filterHandler = (filterInput) => {
    setFilter(filterInput);
  }

  return (
    <React.Fragment>
      <TaskForm data={transferData} />
      <TasksFilter onFilterChange={filterHandler} />
      <Tasks tasks={tasks} delete={deleteHandle} state={filter} />
    </React.Fragment>
  );
}

export default App;
