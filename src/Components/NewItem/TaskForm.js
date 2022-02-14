import React, { useContext, useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "./Input";
import styles from './TaskForm.module.scss';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Modal from "../UI/Modal";
import TaskContext from "../../store/task-context";
import validate from "./validateTask";
import Card from "../UI/Card";
import Tag from "../Items/Tag";
import TagForm from "./TagForm";




const empty = errors => {
    return errors.title === '' || errors.tag === '' || errors.description === '' || errors.date === '';
}

const FormOverlay = props => {
    console.log('runned')
    const taskCtx = useContext(TaskContext);
    const [data, setData] = useState({
        title: '',
        tag: '',
        description: '',
        date: ''
    });
    const [errors, setErrors] = useState({
        title: '',
        tag: '',
        description: '',
        date: ''
    });
    const [addDesc, setAddDesc] = useState(false);


    const dataHandler = event => {

        setData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
        setErrors(() => {
            return validate(data, addDesc);
        })
        console.log(event.target.value, data)
    }

    const addDescClickHandle = () => {
        setAddDesc((prevState) => !prevState);
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        const task = {
            'title': data.title,
            'tag': data.tag,
            'description': `${addDesc ? data.description : ''}`,
            'state': 'todo',
            'date': new Date(data.date)
        }
        // console.log(enteredDate);
        const valid = validate(data, addDesc);

        if (!empty(errors)) {
            taskCtx.addTask(task);
            props.onClick();
        } else {
            setErrors(valid);
            return
        }

    }

    return (
        <form onSubmit={formSubmitHandle}>
            <h2>Create Task</h2>
            <div className={styles.controls}>
                <Input
                    input={{
                        name: 'title',
                        title: 'Title',
                        type: 'text',
                        placeholder: 'Task Title',
                        error: errors.title,
                        onChange: dataHandler
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
                    <Input
                        input={{
                            name: 'description',
                            title: 'Description',
                            type: 'text-area',
                            placeholder: 'Type a description ...',
                            error: errors.description,
                            onChange: dataHandler
                        }}
                    /> : ''}

                {/* <Input
                    input={{
                        name: 'tag',
                        title: 'Tag',
                        type: 'text',
                        placeholder: 'Add tag',
                        error: errors.tag,
                        onChange: dataHandler
                    }}
                >
                    <Button><GrFormAdd /> <p>Add Tag</p></Button>
                </Input> */}
                <TagForm />

                <div className={styles.date}>
                    <Input
                        input={{
                            name: 'date',
                            title: 'Date',
                            type: 'date',
                            error: errors.date,
                            onChange: dataHandler
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
            <Card>
                <FormOverlay {...props} />
            </Card>

        </Modal>
    )
}

export default TaskForm;