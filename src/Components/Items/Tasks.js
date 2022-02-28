import React, { useContext, useState } from 'react';
import styles from './Tasks.module.scss';
import TaskItem from './TaskItem';
import TaskContext from '../../store/task-context';

const Tasks = (props) => {
    const taskCtx = useContext(TaskContext);

    const state = props.state;
    const filteredTasks = taskCtx.tasks.filter(task => task.state === props.state);

    const dragOverHandle = (event) => {
        // console.log(event);
        event.preventDefault();
    }
    const dropHandle = (event) => {
        event.preventDefault();
        // console.log(event)
        const task = event.dataTransfer.getData('task');
        taskCtx.moveTask(+task, state)
    }
    return (
        <div className={styles['tasks-box']} >
            <h2 className={styles.title + ' ' + styles[state]}>{props.title} <span className={styles.counter}>{filteredTasks.length}</span></h2>
            <hr className={styles[state]} />
            <ul className={styles.list}
                onDragOver={dragOverHandle} onDrop={dropHandle} id={state} onClick={dropHandle}
            >
                {filteredTasks.map(task => <TaskItem task={task} key={task.title} />)}
            </ul>
        </div>

    );
}

export default Tasks;