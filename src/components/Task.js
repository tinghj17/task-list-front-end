import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, completeCallback }) => {
  // const [complete, setComplete] = useState(isComplete);
  const updateStatus = () => {
    completeCallback(
      {
        id,
        title,
        complete: !isComplete
      }
    )
  }
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() =>{
          completeCallback(id);
        }}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  completeCallback: PropTypes.func.isRequired,
};

export default Task;


