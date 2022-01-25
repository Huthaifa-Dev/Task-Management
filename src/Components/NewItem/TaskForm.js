import { useState } from "react";
import './dist/TaskForm.css';

const TaskForm = (props) => {
    const [enteredTitle, setTitle] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const result = { 'title': `${enteredTitle}`, 'state': 'available' };
        setTitle('');
        props.data(result);
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="task-form__controls">
                <div className="task-form__control">
                    <label>Task</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        placeholder="Add a new task"
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="task-form__actions">
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;