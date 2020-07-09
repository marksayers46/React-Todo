import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
    
  }
  
  render() {
    console.log('rendering...')
    return (
      <div clasName='App'>
        <h1 className='title'>Welcome to your Todo App!</h1>
        <TodoForm addItem={this.addItem}/>
        <TodoList todo={this.state.todo}/>

        <button className='clearButton'>Clear Completed Task</button>
        <button className='clearButton'>Restore List</button>
      </div>  
    );
  }
}

export default App;
