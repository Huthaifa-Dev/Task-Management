import React, { useState, useEffect } from 'react';
import styles from './Tasks.module.scss';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../../store/board-slice';

const Tasks = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.board.tasks);
    const state = props.state;

    const filteredTasks = tasks.filter(task => task.state === props.state);

    const dragOverHandle = (event) => {
        // console.log(event);
        event.preventDefault();
    }
    const dropHandle = (event) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('task');
        dispatch(boardActions.updateTaskInsideBoard({
            id: taskId,
            state
        }))
        // console.log(event)
        // try {

        //     // console.log(taskId, state);
        //     // tasks.moveTask(taskId, state);
        // } catch (error) {
        //     console.log(error)
        // }

    }
    return (
        <div className={styles['tasks-box']} >
            <h2 className={styles.title + ' ' + styles[state]}>{props.title} <span className={styles.counter}>{filteredTasks.length}</span></h2>
            <hr className={styles[state]} />
            <ul className={styles.list}
                onDragOver={dragOverHandle} onDrop={dropHandle} id={state}
            >
                {filteredTasks.map(task => <TaskItem task={task} key={task.id} />)}
            </ul>
        </div>

    );
}

export default Tasks;