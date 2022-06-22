import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onUpdateTask, deleteCallback }) => {
  // const TaskList = (props) => {
  //   const getTaskListJSX = props.tasks.map((task) => {
  const getTaskListJSX = tasks.map((task) => {
    return (
      <section key={task.id}>
        <Task
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onUpdateTask={onUpdateTask}
          deleteCallback={deleteCallback}
        />
      </section>
    );
  });

  return <ul className="tasks__list no-bullet">{getTaskListJSX}</ul>;
};
  


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default TaskList;
