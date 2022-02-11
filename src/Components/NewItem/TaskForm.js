import React, { useContext, useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "./Input";
import styles from './TaskForm.module.scss';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Modal from "../UI/Modal";
import TaskContext from "../../store/task-context";
import { empty, validate } from "./validateTask";





const FormOverlay = props => {

    const taskCtx = useContext(TaskContext);

    const [addDesc, setAddDesc] = useState(false);
    const [errors, setErrors] = useState(false);

    const titleInput = useRef();
    const tagInput = useRef();
    const dateInput = useRef();
    const descInput = useRef();

    const addDescClickHandle = () => {
        setAddDesc((prevState) => !prevState);
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        const enteredTitle = titleInput.current.value;
        const enteredTag = tagInput.current.value;
        const enteredDesc = addDesc ? descInput.current.value : '';
        const enteredDate = new Date(dateInput.current.value);
        const task = {
            'title': enteredTitle,
            'tag': enteredTag,
            'description': `${addDesc ? enteredDesc : ''}`,
            'state': 'todo',
            'date': enteredDate
        }
        // console.log(enteredDate);
        const valid = validate(task, addDesc);
        // console.log(valid, empty(), addDesc);

        if (empty()) {
            taskCtx.addTask(task);
            props.onClick();
        } else {
            setErrors(valid);
            console.log(valid)
            return
        }

    }

    return (
        <form onSubmit={formSubmitHandle}>
            <h2>Create Task</h2>
            <div className={styles.controls}>
                <Input ref={titleInput}
                    input={{
                        title: 'Title',
                        type: 'text',
                        placeholder: 'Task Title',
                        error: errors.title
                    }}
                >
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
                {addDesc ?
                    <Input ref={descInput}
                        input={{
                            title: 'Description',
                            type: 'text-area',
                            placeholder: 'Type a description ...',
                            error: errors.description
                        }}
                    /> : ''}

                <Input ref={tagInput}
                    input={{
                        title: 'Tag',
                        type: 'text',
                        placeholder: 'Add tag',
                        error: errors.tag
                    }}
                >
                    <Button><GrFormAdd /> <p>Add Tag</p></Button>
                </Input>

                <div className={styles.date}>
                    <Input ref={dateInput}
                        input={{
                            title: 'Date',
                            type: 'date',
                            error: errors.date
                        }}
                    />
                    <Input
                        input={{
                            title: 'Time',
                            type: 'time'
                        }}
                    />
                    <Input input={{
                        title: 'Duration',
                        type: 'number'
                    }} />
                </div>
            </div>
            <Button className={styles.action} type='submit'>
                Create Task
            </Button>
        </form>
    )
}
const TaskForm = (props) => {


    return (
        <Modal onClick={props.onClick}>
            <FormOverlay {...props} />
        </Modal>
    )
}

export default TaskForm;