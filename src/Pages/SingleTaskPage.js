import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FullTask from "../Components/Items/FullTask";
import { boardActions } from "../store/board-slice";

const SingleTaskPage = () => {
    const taskId = useParams();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.board.tasks)
    const data = tasks.find(task => task.id === taskId.taskId)
    console.log(data);
    return (
        <FullTask task={data} />
    )
}

export default SingleTaskPage;