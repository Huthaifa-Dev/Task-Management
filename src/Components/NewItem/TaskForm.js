import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "./Input";
import styles from './TaskForm.module.scss';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import ReactDom from "react-dom";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClick} />;
};

const FormOverlay = props => {
    const [addDesc, setAddDesc] = useState(false);
    const titleInput = useRef();
    const tagInput = useRef();
    const dateInput = useRef();
    const descInput = useRef();

    const addDescClickHandle = () => {
        addDesc ? setAddDesc(false) : setAddDesc(true);
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        const task = {
            'title': titleInput.current.value,
            'tag': tagInput.current.value,
            'description': `${addDesc ? descInput.current.value : ''}`,
            'state': 'todo',
            'date': new Date(dateInput.current.value)
        }
        console.log(task);
        props.data(task);
        props.onClick();
    }

    return (
        <Card className={styles.card}>
            <form onSubmit={formSubmitHandle}>
                <h2>Create Task</h2>
                <div className={styles.controls}>
                    <Input ref={titleInput} title='Title' type='text' placeholder='Task Title'>
                        {!addDesc ?
                            <Button onClick={addDescClickHandle}>
                                <GrFormAdd /> <p>Add description</p>
                            </Button>

                            :
                            <Button onClick={addDescClickHandle}>
                                <GrFormSubtract /> <p>Remove description</p>
                            </Button>
                        }
                    </Input>

                    <Input ref={tagInput} title='Tags' type='text' placeholder='Task Tags'>
                        <Button><GrFormAdd /> <p>Add Tag</p></Button>
                    </Input>
                    {addDesc ? <Input ref={descInput} title='Description' type='text-area' placeholder='Type a description ...' /> : ''}
                    <div className={styles.date}>
                        <Input ref={dateInput} title='Date' type='date' />
                        <Input title='Time' type='time' />
                        <Input title='Duration' type='number' />
                    </div>
                </div>
                <Button className={styles.action} type='submit'>
                    Create Task
                </Button>
            </form>
        </Card>)
}
const TaskForm = (props) => {


    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<FormOverlay {...props} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default TaskForm;