import React, { Fragment, useEffect, useState } from "react";
import Tasks from "./Components/Items/Tasks";

import './App.css';
import NewTask from "./Components/NewItem/NewTask";
import TaskForm from "./Components/NewItem/TaskForm";

import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardData, sendBoardData } from "./store/board-actions";


function App() {
  const [formActive, setFormActive] = useState(false);

  const dispatch = useDispatch();
  const board = useSelector(state => state.board);
  const notification = useSelector(state => state.ui.notification);
  const form = useSelector(state => state.ui.formIsVisible)
  const formClickHandler = () => {
    setFormActive((prevState) => !prevState);
  }

  let initial = true;

  useEffect(() => {
    dispatch(fetchBoardData());
  }, [dispatch])

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (board.changed) {
      dispatch(sendBoardData());
    }
  }, [board, dispatch])

  return (
    <Fragment>
      <div className="temp-nav"></div>
      <div className="todo-states">
        <Tasks state={'todo'} title='TODO' />
        <Tasks state={'inwork'} title='IN WORK' />
        <Tasks state={'qa'} title='QA' />
        <Tasks state={'completed'} title='COMPLETED' />
      </div>
      {!formActive && <NewTask onClick={formClickHandler} />}
      {formActive && <TaskForm onClick={formClickHandler} />}
    </Fragment>
  );
}

export default App;
