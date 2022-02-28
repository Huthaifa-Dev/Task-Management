import React, { useContext, useReducer, useState } from "react";
import Button from "../UI/Button";
import Input from "./Input";
import styles from './TaskForm.module.scss';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Modal from "../UI/Modal";
import TaskContext from "../../store/task-context";
import Card from "../UI/Card";
import TagForm from "./TagForm";


const defaultErrorState = {
    title: '',
    tag: '',
    description: 'empty',
    date: '',
    isValid: false
}

const errorReducer = (state, action) => {
    // console.log(state)
    if (action.type[0] === 'title') {
        return {
            ...state,
            [action.type]: action.value.trim().length === 0 ? 'Title is required!' : ''
        }
    }
    if (action.type[0] === 'tag') {
        return {
            ...state,
            [action.type]: action.value.trim().length === 0 ? 'Tag is required!' : ''
        }
    }
    if (action.type[0] === 'description') {
        return {
            ...state,
            [action.type]: action.value.trim().length < 6 ? 'Description is required!' : ''
        }
    }
    if (action.type[0] === 'date') {
        return {
            ...state,
            [action.type]: action.value.trim().length === 0 ? 'Date is required!' : ''
        }
    }
    if (action.type === 'CHECK') {
        if (
            state.title.trim().length === 0 &&
            state.tag.trim().length === 0 &&
            (state.description.trim().length === 0 || state.description === 'empty') &&
            state.date.trim().length === 0
        ) {
            return {
                ...state,
                isValid: true
            }
        }
        return {
            ...state,
            isValid: false
        }
    }

    return defaultErrorState;
}

const FormOverlay = props => {
    const [error, dispatchError] = useReducer(errorReducer, defaultErrorState);
    const taskCtx = useContext(TaskContext);
    const [data, setData] = useState({
        title: '',
        tag: '',
        description: '',
        date: ''
    });
    const [addDesc, setAddDesc] = useState(false);

    const dataHandler = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        }
        );
        dispatchError({ type: [event.target.name], value: event.target.value });
        dispatchError({ type: 'CHECK' });
    }

    const addDescClickHandle = () => {
        setAddDesc((prevState) => !prevState);
    }
    const passTag = (tag) => {
        setData({
            ...data,
            tag: tag
        });
        dispatchError({ type: 'tag', value: tag });
        dispatchError({ type: 'CHECK' });
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        dispatchError({ type: 'CHECK' });
        const task = {
            'title': data.title,
            'tag': data.tag,
            'description': data.description,
            'state': 'todo',
            'date': new Date(data.date)
        }
        console.log(error);
        if (error.isValid) {
            taskCtx.addTask(task);
            props.onClick();
        } else {
            return;
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
                        error: error.title,
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
                            error: error.description,
                            onChange: dataHandler
                        }}
                    /> : ''}

                {/* <Input
                    input={{
                        name: 'tag',
                        title: 'Tag',
                        type: 'text',
                        placeholder: 'Add tag',
                        error: error.tag,
                        onChange: dataHandler
                    }}
                >
                    <Button><GrFormAdd /> <p>Add Tag</p></Button>
                </Input> */}
                <TagForm passData={passTag} />

                <div className={styles.date}>
                    <Input
                        input={{
                            name: 'date',
                            title: 'Date',
                            type: 'date',
                            error: error.date,
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