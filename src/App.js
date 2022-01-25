import { useState } from "react";
import TasksFilter from "./Components/Filters/TasksFilter";
import Tasks from "./Components/Items/Tasks";

import TaskForm from "./Components/NewItem/TaskForm";
import './css/all.css';

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

  const DUMP_DELETED = [];
  const [tasks, setTasks] = useState(DUMP_TASKS);
  const [deleted, setDeleted] = useState(DUMP_DELETED);
  const [filter, setFilter] = useState('all');

  const transferData = (data) => {
    setTasks((prevTasks) => {
      return [data, ...prevTasks];
    })
  }

  const deleteHandle = (input) => {
    var index = tasks.indexOf(input);

    if (index !== -1) {
      setTasks(tasks.filter(task => task.title !== input.title));
      setDeleted((prevDeleted) => {
        console.log(input);
        return [input, ...prevDeleted];
      })

    }
  }

  const filterHandler = (filterInput) => {
    setFilter(filterInput);
  }

  return (
    <div>
      <TaskForm data={transferData} />
      <TasksFilter onFilterChange={filterHandler} />
      <Tasks tasks={tasks} delete={deleteHandle} state={filter} deleted={deleted} />
    </div>
  );
}

export default App;
