import React from "react";
import styles from './Input.module.scss';
import { AiFillCloseCircle } from "react-icons/ai";
const Input = props => {
    const { title, error } = { ...props.input };
    console.log(props.input.name, error);
    const classes = `${styles.container} ${error || !error === '' ? styles.error : ''}`;
    return (
        <div className={classes}>
            <label htmlFor={title}>{title}</label>
            <div className={styles.input}>
                <input {...props.input} />
                {props.children}
            </div>
            {(error || !error === '') && <p><AiFillCloseCircle />{error}</p>}
        </div>
    )
}

export default Input;