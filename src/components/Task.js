import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onUpdateTask, deleteCallback }) => {
    // const [complete, setComplete] = useState(isComplete);

    const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => {onUpdateTask(id);}}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => deleteCallback(id)}>x</button>
    </li>
  );
};
Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default Task;