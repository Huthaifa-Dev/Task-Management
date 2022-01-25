import './dist/Tasks.css';
import TaskItem from './TaskItem';

const Tasks = (props) => {

    const deleteHandler = (input) => {
        console.log(input);
        props.delete(input);

    }
    if (props.tasks.length === 0 && props.deleted.length === 0) {
        return <h2 className='tasks-list__fallback'>Found no Tasks</h2>
    }



    const filteredTasks = props.state === 'all' ? props.tasks
        : (props.state === 'deleted' ? props.deleted
            : props.tasks.filter(task => task.state === props.state));

    return (
        <ul className="task-list">
            {filteredTasks.map(task => <TaskItem task={task} key={task.title} delete={deleteHandler} />)}
        </ul>
    );
}

export default Tasks;