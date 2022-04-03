
import styles from './TaskItem.module.scss';
import { AiOutlineComment, AiOutlineLink } from "react-icons/ai";
import Tag from './Tag';
import Draggable from '../UI/Draggable';
import State from './State';

const TaskItem = (props) => {
    const { state, date } = props.task;

    const dragStartHandle = event => {
        console.log(props.task.id);
        console.log(props.task);

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
                        <State state={state} date={date} />

                    </div>
                </div>
            </Draggable>
        </li >
    );
}

export default TaskItem;