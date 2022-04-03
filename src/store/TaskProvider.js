import React, { useReducer } from "react";
import TaskContext from "./task-context";

const defaultTasksState = {
    tasks: []

}

const taskReducer = (state, action) => {
    if (action.type === 'SET') {
        const fetchedTaks = action.value;
        return {
            tasks: fetchedTaks
        }
    } else if (action.type === 'ADD') {
        const task = action.value;
        task.id = state.tasks.length + 1;
        const updatedTasks = state.tasks.concat(task);
        return {
            tasks: updatedTasks
        };
    } else if (action.type === 'MOVE') {
        const { id, target } = action.value;
        // console.log(action);
        // console.log(state.tasks.findIndex((task) => task.id === id))
        const existingTaskItemIndex = state.tasks.findIndex((task) => task.id === id);
        const existingTaskItem = state.tasks[existingTaskItemIndex];
        const updatedTask = {
            ...existingTaskItem,
            state: target
        }

        const updatedTasks = [...state.tasks];
        updatedTasks[existingTaskItemIndex] = updatedTask;

        return {
            tasks: updatedTasks
        }
    }
    return defaultTasksState;
}

const TaskProvider = props => {

    const [tasksState, dispatchTask] = useReducer(taskReducer, defaultTasksState);

    const setTasksHandler = tasks => {
        dispatchTask({ type: 'SET', value: tasks })
    }
    const addTaskHandler = (task) => {
        dispatchTask({ type: 'ADD', value: task });
    }

    const moveTaskHandler = (id, target) => {
        dispatchTask({ type: 'MOVE', value: { id, target } })
    }

    const taskContext = {
        tasks: tasksState.tasks,
        setTasks: setTasksHandler,
        addTask: addTaskHandler,
        moveTask: moveTaskHandler
    }
    return (
        <TaskContext.Provider
            value={taskContext}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;