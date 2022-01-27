import React from 'react';
import styles from './Tasks.module.scss';
import TaskItem from './TaskItem';

const Tasks = (props) => {

    const state = props.state.replace(/\s+/g, '');
    const filteredTasks = props.tasks.filter(task => task.state === props.state);
    return (
        <div className={styles['tasks-box']}>
            <h2 className={styles.title + ' ' + styles[state]}>{props.state.toUpperCase()} <span className={styles.counter}>{filteredTasks.length}</span></h2>
            <hr className={styles[state]} />
            <ul className={styles.list}>
                {filteredTasks.map(task => <TaskItem task={task} key={task.title} />)}
            </ul>
        </div>

    );
}

export default Tasks;