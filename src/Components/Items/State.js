import React from 'react';
import { AiOutlineCalendar, AiFillLike } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import Button from '../UI/Button';
import styles from './State.module.scss';
const State = props => {
    const { state, date } = props;
    // const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    // console.log(date, date.toLocaleString("en-US", { month: "short" }))
    return (
        <div className={styles.status}>
            {state === 'qa' && <Button className={styles.like}><AiFillLike /><p>Like</p></Button>}
            {state === 'completed' &&
                <div className={styles.completed}>
                    <BsCheck2All />
                    <p>Done</p>
                </div>}
            {(state === 'todo' || state === 'inwork') &&
                <div className={styles.date}>
                    <AiOutlineCalendar />
                    <p>{day}</p>
                </div>
            }

        </div>
    )
}
export default State;