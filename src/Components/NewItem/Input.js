import React, { useRef } from "react";
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
    const InputRef = ref;
    const classes = props.className + ' ' + styles.container;
    return (
        <div className={classes}>
            <label htmlFor={props.title}>{props.title}</label>
            <div className={styles.input}>
                <input name={props.title} type={props.type} placeholder={props.placeholder} ref={InputRef} />
                {props.children}
            </div>
        </div>
    )
})

export default Input;