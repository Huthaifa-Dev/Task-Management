import React from 'react';
import './dist/Tasks.css';
import TaskItem from './TaskItem';

const Tasks = (props) => {

    const filteredTasks = props.tasks.filter(task => task.state === props.state);
    return (
        <div className='tasks-box'>
            <h2 className={`state-title ${props.state.replace(/\s+/g, '')}`}>{props.state.toUpperCase()} <span className='tasks-counter'>{filteredTasks.length}</span></h2>
            <hr className={`${props.state.replace(/\s+/g, '')}`} />
            <ul className="task-list">
                {filteredTasks.map(task => <TaskItem task={task} key={task.title} />)}
            </ul>
        </div>

    );
}

export default Tasks;