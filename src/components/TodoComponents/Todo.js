import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <h1
      onClick={() => props.onSelect(props.id)}
      id={props.id}
      className={props.completed ? 'line-through' : null}
    >
      {props.task}
    </h1>
  );
};

export default Todo;
