import React, { Fragment } from 'react';
import Tasks from '../Components/Items/Tasks';
const TasksPage = () => {
    return (
        <Fragment>
            <Tasks state={'todo'} title='TODO' />
            <Tasks state={'inwork'} title='IN WORK' />
            <Tasks state={'qa'} title='QA' />
            <Tasks state={'completed'} title='COMPLETED' />
        </Fragment>
    )
}

export default TasksPage;