import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [tasks, setComplete] = useState([
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

  const toggleTaskComplete = (id) => {
    for (const task of tasks) {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
    }
    const newTaskList = [...tasks];
    setComplete(newTaskList);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setComplete(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <TaskList 
        tasks={tasks} 
        onUpdateTask={toggleTaskComplete} 
        deleteCallback={deleteTask}/>
      </main>
    </div>
  );
};

export default App;
