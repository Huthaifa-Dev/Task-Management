import { boardActions } from "./board-slice";
import { uiActions } from "./ui-slice";


export const fetchBoardData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://taskmanager-8b109-default-rtdb.firebaseio.com/tasks.json');

            if (!response.ok) {
                throw new Error('Request Failed');
            }

            const data = await response.json();

            return data;
        }

        try {
            const boardData = await fetchData();
            let data = [];
            for (let item in boardData) {
                let task = {
                    id: item,
                    ...boardData[item]
                }
                data.push(task)
            }
            dispatch(boardActions.replaceBoard({
                tasks: data || []
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching board data Failed'
            }))
        }
    }
}

export const sendBoardData = (board) => {//board ={tasks}
    return async dispatch => {
        const tasks = board.tasks
        console.log(tasks);
        const sendRequest = async () => {
            const response = await fetch('https://taskmanager-8b109-default-rtdb.firebaseio.com/tasks.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(tasks)
                }
            );

            if (!response.ok) {
                throw new Error('Request Failed');
            }
        }

        try {
            await sendRequest();
        } catch (error) {
            //send error
            console.log(error)
        }
    }
}
