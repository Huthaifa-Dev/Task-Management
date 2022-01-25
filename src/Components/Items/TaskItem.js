import { useState } from 'react';
import Card from '../UI/Card';
import './dist/TaskItem.css';


const TaskItem = (props) => {
    const [state, setState] = useState(props.task.state);
    // const [deleted,setDeleted] = useState(false);
    const completeHandler = () => {
        state === 'checked' ? setState('available') : setState('checked');
    }

    const deleteHandler = () => {
        setState('deleted');
        props.delete(props.task);

    }

    return (
        <li>
            <Card className={`task-item ${state === 'checked' ? 'checked' : (state === 'deleted' ? 'deleted' : '')}`}>
                <div className='task-item__description'>
                    <h2>{props.task.title}</h2>
                </div>
                <div className='task-item__actions'>
                    <button type='button' onClick={completeHandler} className={`${state === 'available' ? 'complete' : 'undo'}`}>{state === 'checked' ? (<i className="far fa-undo-alt"></i>) : (<i className="far fa-check"></i>)}</button>
                    <button type='button' onClick={deleteHandler} className='delete'><i className="far fa-times"></i></button>
                </div>
            </Card>
        </li >
    );
}

export default TaskItem;