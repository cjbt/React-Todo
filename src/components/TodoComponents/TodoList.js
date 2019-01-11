// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.queriedSearch.map(task => (
        <Todo
          task={task.task}
          key={task.id}
          onSelect={props.onSelect}
          id={task.id}
          completed={task.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
