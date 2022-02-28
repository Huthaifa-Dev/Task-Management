import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import Input from "./Input";
import styles from './TaskForm.module.scss';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Modal from "../UI/Modal";
import TaskContext from "../../store/task-context";
import Card from "../UI/Card";
import TagForm from "./TagForm";
import useInput from "../../hooks/use-input";



const FormOverlay = props => {
    const validate = value => value.trim() !== '';



    const {
        value: enteredTitle,
        isValid: titleIsValid,
        hasError: titleHasError,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler
    } = useInput(validate);
    const {
        value: enteredDesc,
        isValid: descIsValid,
        hasError: descHasError,
        valueChangeHandler: descChangeHandler,
        inputBlurHandler: descBlurHandler
    } = useInput(validate);
    const {
        value: enteredDate,
        isValid: dateIsValid,
        hasError: dateHasError,
        valueChangeHandler: dateChangeHandler,
        inputBlurHandler: dateBlurHandler
    } = useInput(validate);

    const formIsValid = titleIsValid && descIsValid && dateIsValid;

    const taskCtx = useContext(TaskContext);
    const [data, setData] = useState({
        title: '',
        tag: '',
        description: '',
        date: ''
    });
    const [addDesc, setAddDesc] = useState(false);


    const addDescClickHandle = () => {
        setAddDesc((prevState) => !prevState);
    }


    const formSubmitHandle = (e) => {
        e.preventDefault();

        console.log(descIsValid);

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
                            value: enteredDesc,
                            title: 'Description',
                            type: 'text-area',
                            placeholder: 'Type a description ...',
                            onChange: descChangeHandler,
                            onBlur: descBlurHandler
                        }} error={descHasError}
                    /> : ''}
                {/* <TagForm  /> */}

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
                <FormOverlay {...props} />
            </Card>

        </Modal>
    )
}

export default TaskForm;