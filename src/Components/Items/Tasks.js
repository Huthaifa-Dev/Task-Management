import React, { useContext, useState, useEffect } from 'react';
import styles from './Tasks.module.scss';
import TaskItem from './TaskItem';
import TaskContext from '../../store/task-context';

const Tasks = (props) => {
    const taskCtx = useContext(TaskContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        const fetchTasks = async () => {

            const response = await fetch('https://react-http-d8b6c-default-rtdb.firebaseio.com/tasks.json');
            if (!response.ok) {
                throw new Error('Request Failed');
            }
            const data = await response.json();
            const tasksChange = data => {
                const loadedTasks = [];
                for (const key in data) {
                    loadedTasks.push({
                        id: key,
                        title: data[key].title,
                        description: data[key].description,
                        state: data[key].state,
                        tag: data[key].tag,
                        date: new Date(data[key].date)
                    });
                }
                taskCtx.setTasks(loadedTasks);
            }
            tasksChange(data);
            setIsLoading(false);
        }

        fetchTasks().catch((err) => {
            setIsLoading(false);
            setError(err.message || 'Something went Wrong!');

        })

    }, [])
    const state = props.state;
    const filteredTasks = taskCtx.tasks.filter(task => task.state === props.state);

    const dragOverHandle = (event) => {
        // console.log(event);
        event.preventDefault();
    }
    const dropHandle = (event) => {
        event.preventDefault();
        // console.log(event)
        try {
            const taskId = event.dataTransfer.getData('task');
            // const fetchTasks = async () => {
            //     const task = {
            //         ...taskCtx.tasks[taskId],
            //         'state': state,

            //     }
            //     await fetch('https://react-http-d8b6c-default-rtdb.firebaseio.com/tasks.json',
            //         {
            //             method: 'POST',
            //             body: JSON.stringify(task)
            //         }
            //     )
            // }
            // fetchTasks();
            taskCtx.moveTask(taskId, state);
        } catch (error) {

        }

    }
    return (
        <div className={styles['tasks-box']} >
            <h2 className={styles.title + ' ' + styles[state]}>{props.title} <span className={styles.counter}>{filteredTasks.length}</span></h2>
            <hr className={styles[state]} />
            <ul className={styles.list}
                onDragOver={dragOverHandle} onDrop={dropHandle} id={state} onClick={dropHandle}
            >
                {filteredTasks.map(task => <TaskItem task={task} key={task.id} />)}
            </ul>
        </div>

    );
}

export default Tasks;