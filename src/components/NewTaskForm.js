import React, { useState} from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = (props) => {
  const [formState, setFormState] = useState({
    title: '',
  });

  const onTaskChange = (event) => {
    setFormState({
      ...formState,
      // reassign the value
      title: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addTaskCallback(formState);

    setFormState({
      title: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input title="title" value={formState.title} onChange={onTaskChange} />
      </div>
    </form>
  );
};

NewTaskForm.propTypes = {
  addTaskCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;
