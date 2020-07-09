import React from 'react';

class TodoForm extends React.Componenet {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }

  render() {
    console.log('rendering form')
    return(
      <div className='form'>
        <form>
          <input 
          type='text' 
          name='item' 
          value='task' 
          className='field'
          placeholder='Task' />
        </form>

      </div>
    );
  }
}
export default TodoForm;