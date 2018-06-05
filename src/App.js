import React, { Component } from 'react';
import Header from './header.js';
import TextBox from './textbox.js';
import TaskList from './tasklist.js';
import './App.css';
import CreateStore from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: new Set()
    };

    this.onTaskClick = this.onTaskClick.bind(this);
    this.onTaskAdd = this.onTaskAdd.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
  };
  
  onTaskClick(task) {
    let tasks = this.state.tasks;
    task.checked = (task.checked === "checked") ? "" : "checked";
    this.setState({tasks});
  }

  onTaskDelete(task) {
    let {tasks} = this.state;
    tasks.delete(task)
    this.setState({tasks});
  }

  onTaskAdd(text) {
    let {tasks} = this.state;
    const task = {
      text,
      checked: '',
      key: text
    };
    tasks.add(task);
    this.setState({tasks});
  }

  // reducer(state, action) {
  //   let tasks = state.tasks;
  //   let task = action.task;
  //   switch(action.type) {
  //     case 'ADD' :
  //       const task = {
  //         text: action.text,
  //         checked: '',
  //         key: action.text
  //       };
  //       tasks.add(task);
  //       break;
  //     case 'REMOVE' :
  //       tasks.delete(task); // is this mutation ? if yes, then how to filter in 
  //       break;
  //     case 'CLICK' :
  //       task.checked = (task.checked === "checked") ? "" : "checked";
  //       break;
  //   }
  // }

  render() {
    const title = 'my title';
    const {tasks} = this.state;

    return (
      <div className="App">
        <Header title={title}/>
        <TextBox onTaskAdd={this.onTaskAdd}/>
        <TaskList tasks={tasks} onTaskClick={this.onTaskClick} onTaskDelete={this.onTaskDelete}/>
      </div>
    );
  }
};

export default App;
