import styles from './TaskDate.module.scss';
const TaskDate = (props) => {
    // const month = props.date.toLocaleString("en-US", { month: "short" });
    // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    // const year = props.date.getFullYear();
    return (
        <div className={styles["task-date"]}>
            <input
                className={styles.date}
                type="date"
                ref={props.ref}
                min="2022-01-01"
                max="2022-12-31"
            />
            <input
                type='time'
            />
            <input type='number' />
        </div>
    );
}

export default TaskDate;