import React, { useEffect } from "react";
import TasksPage from "./Pages/TasksPage";
import SingleTaskPage from "./Pages/SingleTaskPage"
import './App.css';
import NewTask from "./Components/NewItem/NewTask";
import TaskForm from "./Components/NewItem/TaskForm";

import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardData, sendBoardData } from "./store/board-actions";
import { uiActions } from "./store/ui-slice";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import SideNav from "./Components/UI/SideNav";
import UpdatesPage from "./Pages/UpdatesPage";
import AboutPage from "./Pages/AboutPage";

import video from "./assets/7btrrd.mp4";

// const AboutPage = React.lazy(() => { import('./Pages/AboutPage') })
// const UpdatesPage = React.lazy(() => { import('./Pages/UpdatesPage') })
// const HomePage = React.lazy(() => { import('./Pages/HomePage') })
// const ErrorPage = React.lazy(() => { import('./Pages/ErrorPage') })
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
  const tasks = <div className="content tasks-container">
    <TasksPage />
    {!formIsVisible && <NewTask onClick={formClickHandler} />}
    {formIsVisible && <TaskForm onClick={formClickHandler} />}
  </div>
  return (
    <div className="container">
      <div class="video-bg">
        <video width="320" height="240" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='temp-nav'>
        <SideNav />
      </div>
      <div className="body">

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} exact />
          <Route path="/home" element={<HomePage />} />
          <Route path="/board" element={tasks} />
          <Route path="/board/:taskId" element={< SingleTaskPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/updates" element={< UpdatesPage />} />
          <Route path="*" element={< ErrorPage />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;
