import React from 'react';

const Todo = props => {
  return (
    <h1 onClick={() => props.onSelect(props.id)} id={props.id}>
      {props.task}
    </h1>
  );
};

export default Todo;
