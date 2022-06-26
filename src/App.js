import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm';

const URL = 'https://task-list-api-c17.herokuapp.com';

const App = () => {
  const [taskState, setComplete] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);

  // Add a Task (will also be used for the NewTaskForm.js)
  const addTask = (task) => {
    let isComplete = null;
    if (task.isComplete) {
      isComplete = new Date();
    }

    axios
      .post(`${URL}/tasks`, {
        title: task.title,
        completed: isComplete,
        description: '',
      })
      .then((response) => {
        const newTasks = [...taskState];
        task.id = response.data.task.id;
        newTasks.push(task);
        setComplete(newTasks);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // Retrieve a Task
  const getTask = () => {
    axios
      .get(`${URL}/tasks`)
      .then((response) => {
        console.log(response.data);
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });

        setComplete(newTasks);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(getTask, []);

  // Call and update the API
  const callAPI = (task) => {
    const isTaskCompleted = task.isComplete
      ? 'mark_incomplete'
      : 'mark_complete';

    axios
      .patch(`${URL}/tasks/${task.id}/${isTaskCompleted}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // Toggle Task
  const toggleTaskComplete = (id) => {
    const newTaskList = taskState.map((task) => {
      if (task.id === id) {
        callAPI(task);
        return {
          id: task.id,
          title: task.title,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });

    setComplete(newTaskList);
  };
  //   for (const task of tasks) {
  //     if (task.id === id) {
  //       task.isComplete = !task.isComplete;
  //     }
  //   }
  //   const newTaskList = [...tasks];
  //   setComplete(newTaskList);
  // };

  // Delete a Task
  const deleteTask = (id) => {
    console.log(`Delete task ${id}`);
    axios
      .delete(`${URL}/tasks/${id}`)
      .then((response) => {
        console.log(response.data);
        getTask();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  // const updatedTasks = tasks.filter(task => task.id !== id);
  //   setComplete(updatedTasks);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            onUpdateTask={toggleTaskComplete}
            deleteCallback={deleteTask}
            tasks={taskState}
          />
          <NewTaskForm addTaskCallback={addTask}/>
        </div>
      </main>
    </div>
  );
};

export default App;
