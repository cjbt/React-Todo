import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Fuse from 'fuse.js';

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
  constructor() {
    super();
    this.state = {
      dataList: data,
      queriedSearch: data,
      inputText: '',
      searchText: ''
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state.searchText)
    );

    switch (e.target.name) {
      case 'searchText':
        this.searchChange(e);
        break;
    }

    // return this.state.searchText.length > 0
    //   ? this.searchChange(e.target.value)
    //   : null;
  };

  searchChange = e => {
    // const queryResults = this.state.dataList.filter(data =>
    //   data.task.startsWith(e.target.value)
    // );

    this.setState({
      queriedSearch:
        e.target.value === ''
          ? this.state.dataList
          : new Fuse(this.state.dataList, {
              tokenize: true,
              location: 0,
              distance: 0,
              threshold: 0,
              keys: ['task']
            }).search(e.target.value)
    });

    // if (this.state.searchText.length === 0) {
    //   this.setState({
    //     dataList: this.state.dataList
    //   });
    // } else {
    //   this.setState({
    //     dataList: searchedData.filter(
    //       data => data.task === this.state.searchText
    //     )
    //   });
    // }
  };

  submitHandler = e => {
    e.preventDefault();
    const newArr = [
      ...this.state.dataList,
      {
        task: this.state.inputText,
        id: Date.now(),
        completed: false
      }
    ];
    this.setState({
      dataList: newArr,
      queriedSearch: newArr,
      inputText: ''
    });
  };

  onSelect = id => {
    const newArr = this.state.dataList.map(data => {
      if (data.id === id) {
        return { ...data, completed: !data.completed };
      } else {
        return data;
      }
    });
    this.setState({
      dataList: newArr,
      queriedSearch: newArr
    });
  };

  clearCompleted = e => {
    console.log('hello clear');
    e.preventDefault();
    this.setState({
      dataList: this.state.dataList.filter(data => data.completed === false),
      queriedSearch: this.state.queriedSearch.filter(
        data => data.completed === false
      )
    });
  };

  render() {
    return (
      <div className='App'>
        <TodoList
          dataList={this.state.dataList}
          onSelect={this.onSelect}
          queriedSearch={this.state.queriedSearch}
        />
        <TodoForm
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
