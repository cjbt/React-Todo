import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        type='text'
        name='inputText'
        value={props.inputText}
        placeholder='add more'
        onChange={props.handleChange}
      />
      <button type='submit'>Submit</button>
      <button onClick={props.clearCompleted}>Clear completed</button>
    </form>
  );
};

export default TodoForm;
