import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    dataList: data,
    inputText: ''
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state.inputText)
    );
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({
      dataList: [
        ...this.state.dataList,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ''
    });
  };

  onSelect = id => {
    this.setState({
      dataList: this.state.dataList.map(data => {
        if (data.id === id) {
          return { ...data, completed: !data.completed };
        } else {
          return data;
        }
      })
    });
  };

  render() {
    console.log(this.state.dataList[0].completed);
    return (
      <div className='App'>
        <TodoList
          dataList={this.state.dataList}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default App;
