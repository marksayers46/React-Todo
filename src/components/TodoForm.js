import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    })
  }

  render() {
    console.log('rendering form')
    return(
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input
          onChange={this.handleChanges} 
          type='text' 
          name='item' 
          value={this.state.task} 
          className='field'
          placeholder='Task' />
        </form>

      </div>
    );
  }
}
export default TodoForm;