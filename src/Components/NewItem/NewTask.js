import React, { useState } from "react";
import Button from '../UI/Button';
import { BiMessageSquareAdd } from "react-icons/bi";
import styles from './NewTask.module.scss';
const NewTask = (props) => {
    const onClick = () => {
        props.onClick();
    }
    return (
        <Button className={styles.action} onClick={onClick}><BiMessageSquareAdd /> <p>New Task</p></Button>
    )

}

export default NewTask;