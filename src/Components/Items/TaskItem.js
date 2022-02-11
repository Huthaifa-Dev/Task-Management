import { useState } from 'react';
import Card from '../UI/Card';
import styles from './TaskItem.module.scss';
import { AiOutlineComment, AiOutlineLink, AiOutlineCalendar } from "react-icons/ai";
import Tag from './Tag';
import Draggable from '../UI/Draggable';

const TaskItem = (props) => {
    const [state, setState] = useState(props.task.state);
    const month = props.task.date.toLocaleString("en-US", { month: "short" });
    const day = props.task.date.toLocaleString("en-US", { day: "2-digit" });

    const clickHandle = (event) => {
        console.log(event.target);
    }
    const dragStartHandle = event => {
        event.dataTransfer.setData('task', props.task.id);
    }
    return (
        <li >
            <Draggable onDragStart={dragStartHandle}>
                <div className={styles['todo-item']} id={props.task.id}>
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
                </div>
            </Draggable>
        </li >
    );
}

export default TaskItem;