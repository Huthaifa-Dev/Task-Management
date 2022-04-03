import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import Input from "./Input";
import styles from './TaskForm.module.scss';
import Modal from "../UI/Modal";
import TaskContext from "../../store/task-context";
import Card from "../UI/Card";
import TagForm from "./TagForm";
import useInput from "../../hooks/use-input";



const FormOverlay = props => {
    const validate = value => value.trim() !== '';
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {
        value: enteredTitle,
        isValid: titleIsValid,
        hasError: titleHasError,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        reset: titleReset
    } = useInput(validate);
    const {
        value: enteredDesc,
        isValid: descIsValid,
        hasError: descHasError,
        valueChangeHandler: descChangeHandler,
        inputBlurHandler: descBlurHandler,
        reset: descReset
    } = useInput(validate);
    const {
        value: enteredDate,
        isValid: dateIsValid,
        hasError: dateHasError,
        valueChangeHandler: dateChangeHandler,
        inputBlurHandler: dateBlurHandler,
        reset: dateReset
    } = useInput(validate);


    const formIsValid = titleIsValid && descIsValid && dateIsValid;

    const taskCtx = useContext(TaskContext);
    const [tag, setTag] = useState('');


    const addTag = tag => {

        setTag(tag);

    }

    const formSubmitHandle = async (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }
        setIsLoading(true);
        const task = {
            'title': enteredTitle,
            'tag': tag,
            'description': enteredDesc,
            'state': 'todo',
            'date': new Date(enteredDate)
        }
        taskCtx.addTask(task);
        await fetch('https://react-http-d8b6c-default-rtdb.firebaseio.com/tasks.json',
            {
                method: 'POST',
                body: JSON.stringify(task)
            }
        )
        setIsLoading(false);
        props.onClick();

    }

    return (
        <form onSubmit={formSubmitHandle}>
            <h2>Create Task</h2>
            <div className={styles.controls}>
                <Input
                    input={{
                        name: 'title',
                        value: enteredTitle,
                        title: 'Title',
                        type: 'text',
                        placeholder: 'Task Title',
                        onChange: titleChangeHandler,
                        onBlur: titleBlurHandler
                    }} error={titleHasError}
                >
                </Input>

                <Input
                    input={{
                        name: 'description',
                        value: enteredDesc,
                        title: 'Description',
                        type: 'text-area',
                        placeholder: 'Type a description ...',
                        onChange: descChangeHandler,
                        onBlur: descBlurHandler
                    }} error={descHasError}
                />
                <TagForm passData={addTag} />

                <div className={styles.date}>
                    <Input
                        input={{
                            name: 'date',
                            value: enteredDate,
                            title: 'Date',
                            type: 'date',

                            onChange: dateChangeHandler,
                            onBlur: dateBlurHandler
                        }} error={dateHasError}
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
                <FormOverlay onClick={props.onClick} />
            </Card>

        </Modal>
    )
}

export default TaskForm;