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

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.task !== '') {
      this.props.addItem(this.state.task);
      this.setState({
        task: ''
      });
    }
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
          placeholder='Task' 
          />
          <button className='field'>Add to List</button>
        </form>
        <p className='directions'>Click task to check completed</p>
      </div>
    );
  }
}
export default TodoForm;