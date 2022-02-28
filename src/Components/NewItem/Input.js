import React from "react";
import styles from './Input.module.scss';
import { AiFillCloseCircle } from "react-icons/ai";
const Input = props => {
    const { title } = { ...props.input };
    const { error } = props;
    // console.log(props.input.name, error);
    const classes = `${styles.container} ${error ? styles.error : ''}`;
    return (
        <div className={classes}>
            <label htmlFor={title}>{title}</label>
            <div className={styles.input}>
                <input {...props.input} />
                {props.children}
            </div>
            {error && <p><AiFillCloseCircle />{`${title} Must not be empty!`}</p>}
        </div>

    )
}

export default Input;