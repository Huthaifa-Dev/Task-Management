import { useState } from "react";
import Button from '../UI/Button';
import { BiMessageSquareAdd } from "react-icons/bi";
import './dist/NewTask.css';
const NewTask = (props) => {
    const [active, setActive] = useState(true);

    return (
        active ? <Button className='new-task__action'><BiMessageSquareAdd /> <p>New Task</p></Button> : ''
    )

}

export default NewTask;