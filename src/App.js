import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

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

  // const changeComplete = (id) => {
  //   console.log('complete status changed');
  // };

  const toggleTaskComplete = (taskToUpdate) => {
    const newTasks = taskState.map((task) => {
      if (task.id === taskToUpdate.id) {
        return taskToUpdate;
      }
      return task;
    });
    setComplete(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {<TaskList tasks={taskState} 
          completeCallback={toggleTaskComplete} />}
        </div>
      </main>
    </div>
  );
};

export default App;
