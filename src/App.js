import React, { Fragment, useEffect } from "react";
import TasksPage from "./Pages/TasksPage";
import SingleTaskPage from "./Pages/SingleTaskPage"
import './App.css';
import NewTask from "./Components/NewItem/NewTask";
import TaskForm from "./Components/NewItem/TaskForm";

import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardData, sendBoardData } from "./store/board-actions";
import { uiActions } from "./store/ui-slice";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";

let initial = true;
function App() {
  // const [formActive, setFormActive] = useState(false);

  const formIsVisible = useSelector(state => state.ui.formIsVisible);

  const dispatch = useDispatch();
  const board = useSelector(state => state.board);
  const notification = useSelector(state => state.ui.notification);
  const formClickHandler = () => {
    dispatch(uiActions.toggleForm());
    // setFormActive((prevState) => !prevState);
  }



  useEffect(() => {
    dispatch(fetchBoardData());
  }, [dispatch])

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (board.changed) {
      console.log('changed');
      dispatch(sendBoardData(board));
    }
  }, [board, dispatch]);
  const tasks = <div className="content">
    <TasksPage />
    {!formIsVisible && <NewTask onClick={formClickHandler} />}
    {formIsVisible && <TaskForm onClick={formClickHandler} />}
  </div>
  return (
    <div className="container">
      <div className="temp-nav"></div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/board" element={tasks} />
          <Route path="/board/:taskId" element={< SingleTaskPage />} />
          <Route path="*" element={< ErrorPage />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;
