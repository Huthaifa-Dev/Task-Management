import { useState } from 'react';
import Card from '../UI/Card';
import styles from './TaskItem.module.scss';
import { AiOutlineComment, AiOutlineLink, AiOutlineCalendar } from "react-icons/ai";
import Tag from './Tag';

const TaskItem = (props) => {
    const [state, setState] = useState(props.task.state);
    const month = props.task.date.toLocaleString("en-US", { month: "short" });
    const day = props.task.date.toLocaleString("en-US", { day: "2-digit" });
    console.log(props);
    return (
        <li>
            <Card className={styles['todo-item']}>
                <div className={styles.body}>
                    <h2 className={styles.title}>{props.task.title}</h2>
                    <p className={styles.description}>{props.task.description}</p>
                    <div className={styles.tags}>
                        <Tag tag={props.task.tag} />
                    </div>
                </div>
                <div className={styles.footer}>

                    <div className={styles.comments}>
                        <AiOutlineComment /> <p>3</p>
                    </div>
                    <div className={styles.attachments}>
                        <AiOutlineLink /> <p>8</p>
                    </div>
                    <div className={styles.status}>
                        <AiOutlineCalendar />
                        <p>{day + ' ' + month}</p>
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