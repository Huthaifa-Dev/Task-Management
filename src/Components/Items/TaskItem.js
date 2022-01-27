import { useState } from 'react';
import Card from '../UI/Card';
import './dist/TaskItem.css';
import { AiOutlineComment, AiOutlineLink, AiOutlineCalendar } from "react-icons/ai";
import Tag from './Tag';

const TaskItem = (props) => {
    const [state, setState] = useState(props.task.state);


    return (
        <li>
            <Card className={`todo-item`}>
                <div className='todo-item__body'>
                    <h2 className='todo-item__title'>{props.task.title}</h2>
                    <p className='todo-item__description'>{props.task.description}</p>
                    <div className='todo-item__tags'>
                        <Tag tag={props.task.tag} />
                    </div>
                </div>
                <div className='todo-item__footer'>

                    <div className="comments">
                        <AiOutlineComment /> <p>3</p>
                    </div>
                    <div className="attachments">
                        <AiOutlineLink /> <p>8</p>
                    </div>
                    <div className="status">
                        <AiOutlineCalendar /> <p>Nov 23</p>
                    </div>
                </div>
            </Card>
            {/* <Card >
                <div className='task-item__description'>
                    <h2>{props.task.title}</h2>
                </div>
                <div className='task-item__actions'>
                    <button type='button' onClick={completeHandler} className={`${state === 'available' ? 'complete' : 'undo'}`}>{state === 'checked' ? (<i className="far fa-undo-alt"></i>) : (<i className="far fa-check"></i>)}</button>
                    <button type='button' onClick={deleteHandler} className='delete'><i className="far fa-times"></i></button>
                </div>
            </Card> */}
        </li >
    );
}

export default TaskItem;