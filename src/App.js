import React from 'react';


const data = [
  {
    task: 'Make todo list',
    id: 1234,
    completed: false
  }
]
class App extends React.Component {
  // You will need a place to store your state in this component.
  // Design `App` to be the parent component of your application.
  // This component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      // add my state object
      todo: data,
      lastTodo: data,
      searchText: ''
    };
  };
  
  render() {
    console.log('rendering...')
    return (
      <div clasName='App'>
        <h1 className='title'>Welcome to your Todo App!</h1>
      
      </div>  
    );
  }
}

export default App;
