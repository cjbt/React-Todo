// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = () => {
  return (
    <div>
      {this.state.dataList.map((characterName, i) => (
        <CharacterNames characterName={characterName.characterName} key={i} />
      ))}
      <CharacterForm
        inputText={this.state.inputText}
        handleChange={this.handleChange}
        submitHandler={this.submitHandler}
      />
    </div>
  );
};

export default TodoList;
