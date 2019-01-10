// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
  return (
    <div>
      {props.dataList.map((task, i) => (
        <Todo
          task={task.task}
          key={task.id}
          onSelect={props.onSelect}
          id={task.id}
          completed={task.completed}
        />
      ))}
      <TodoForm
        inputText={props.inputText}
        handleChange={props.handleChange}
        submitHandler={props.submitHandler}
        clearCompleted={props.clearCompleted}
      />
    </div>
  );
};

export default TodoList;

/* 
dataList={this.state.dataList}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
          onSelect={this.onSelect}
*/
