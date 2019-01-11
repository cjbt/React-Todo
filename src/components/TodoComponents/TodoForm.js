import React from 'react';
import Search from './Search';

const TodoForm = props => {
  return (
    <div>
      <Search handleChange={props.handleChange} />
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
    </div>
  );
};

export default TodoForm;
