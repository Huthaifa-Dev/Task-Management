import React, { useReducer } from "react";
import TaskContext from "./task-context";

const defaultTasksState = {
    tasks: [{
        id: 1,
        title: 'UX Adjustments',
        tag: 'Research',
        description: 'It just needs to adabt the UI from what you did before.',
        state: 'todo',
        date: new Date(2021, 2, 28)
    },
    {
        id: 2,
        title: 'Design System',
        tag: 'UI Design',
        description: 'Create a consistent look and feel both on weeb and mobile.',
        state: 'qa',
        date: new Date(2021, 2, 28)
    },
    {
        id: 3,
        title: 'Presentation',
        tag: 'Planning',
        description: 'Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.',
        state: 'completed',
        date: new Date(2021, 2, 28)
    },
    {
        id: 4,
        title: 'Moodboards',
        tag: 'UI Design',
        description: 'Add a field in the portal to let the user connect their Slack account.',
        state: 'inwork',
        date: new Date(2021, 2, 28)
    }],

}

const taskReducer = (state, action) => {
    if (action.type === 'ADD') {
        const task = action.value;
        const updatedTasks = state.tasks.concat(task);
        return {
            tasks: updatedTasks
        };
    }
    else if (action.type === 'MOVE') {
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

    const addTaskHandler = (task) => {
        dispatchTask({ type: 'ADD', value: task });
    }

    const moveTaskHandler = (id, target) => {
        dispatchTask({ type: 'MOVE', value: { id, target } })
    }

    const taskContext = {
        tasks: tasksState.tasks,
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