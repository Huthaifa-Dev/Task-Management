import styles from './TasksFilter.module.scss';

const TasksFilter = (props) => {
    const changeHandler = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (
        <div className={styles["tasks-filter"]}>
            <div className={styles.control}>
                <label>Filter by State</label>
                <select value={props.selected} onChange={changeHandler}>
                    <option value="all">All tasks</option>
                    <option value="available">Not completed</option>
                    <option value="checked">Completed</option>
                    <option value="deleted">Deleted</option>
                </select>
            </div>
        </div>
    );
}
export default TasksFilter;