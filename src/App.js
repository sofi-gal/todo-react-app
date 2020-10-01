import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoList from './components/TodoList/TodoList';
import SubmitForm from './components/SubmitForm/SubmitForm';

class App extends React.Component{
  state = {
    tasks: []
  };
  
  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
}



handleSubmit = task => {
  this.setState({tasks: [...this.state.tasks, task]});
}

  render() {
    return (
      <div className="wrapper">
        <div className="card-frame">
          <Header numTodos={this.state.tasks.length}/>
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
