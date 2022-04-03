import React from "react";

const TaskContext = React.createContext({
    tasks: [],
    setTasks: (tasks) => { },
    addTask: (task) => { },
    moveTask: (id) => { },
});

export default TaskContext;