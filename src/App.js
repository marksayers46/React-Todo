import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const data = [
  {
    task: 'Make todo list',
    id: 1234,
    completed: false
  }
]
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      // add my state object
      todo: data,
      lastTodo: data
    };
  };

  addItem = task => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: task,
          id: Date.now(),
          completed: false
        }
      ]
    })
    this.setState({
      lastTodo: [
        ...this.state.todo,
        {
          task: task,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = (itemID) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemID) {
          return {
            ...item,
            completed: !item.completed //which sets completed to true
          }
        }
        return item;
      })
    })
  }

  clearCompleted = (itemID) => {
    this.state({
      todo: this.state.todo.filter(item => {
        return !item.completed
      })
    })
    this.state({
      lastTodo: this.state.todo.filter(item => {
        return !item.completed
      })
    })
  }

  handleRestoreSubmit = e => {
    e.preventDefault();
    this.setState({ todo: this.state.lastTodo})
  }
  
  render() {
    console.log('rendering...')
    return (
      <div className='App'>
      

        <h1 className='title'>Welcome to your Todo App!</h1>        

        <TodoForm addItem={this.addItem}/> 

        <TodoList
        todo={this.state.todo}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />   

        <button className='clearButton' onClick={this.clearCompleted}>
          Clear Completed Task
        </button>    

        <button className='clearButton' onClick={this.handleRestoreSubmit}>
          Restore List
        </button>
      </div>
    );
  }
}


export default App;
