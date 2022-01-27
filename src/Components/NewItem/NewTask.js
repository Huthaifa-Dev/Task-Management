import { useState } from "react";
import Button from '../UI/Button';
import { BiMessageSquareAdd } from "react-icons/bi";
import styles from './NewTask.module.scss';
import TaskForm from "./TaskForm";
const NewTask = (props) => {
    const [active, setActive] = useState(true);

    const taskHandler = () => {
        active ? setActive(false) : setActive(true);
    }
    return (
        active ? <Button className={styles.action} onClick={taskHandler}><BiMessageSquareAdd /> <p>New Task</p></Button>
            : <TaskForm />

    )

}

export default NewTask;