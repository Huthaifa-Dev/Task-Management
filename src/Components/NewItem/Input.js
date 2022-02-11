import React, { useState } from "react";
import styles from './Input.module.scss';
import { AiFillCloseCircle } from "react-icons/ai";
const Input = React.forwardRef((props, ref) => {
    const InputRef = ref;
    const { title, error } = { ...props.input };
    const [err, setError] = useState(error);

    const classes = `${styles.container} ${error || !error === '' ? styles.error : ''}`;
    console.log(props);
    return (
        <div className={classes}>
            <label htmlFor={title}>{title}</label>
            <div className={styles.input}>
                <input {...props.input} ref={InputRef} />
                {props.children}
            </div>
            {(error || !error === '') && <p><AiFillCloseCircle />{error}</p>}
        </div>
    )
})

export default Input;