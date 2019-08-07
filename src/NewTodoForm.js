import React, {Component} from 'react';

class NewTodoForm extends Component {
	constructor(props){
		super(props)
		this.state={
			contentInput: '',
			priorityInput:''
		};
	}

	render(){
		return (
			<form>
	          <input className="todo-input" type="text" />
	          <button type="submit" className="add-todo">Add</button>
	        </form>

		)
	}

	handleContentInputChange = (e) => {
		this.setState({
			contentInput: e.target.value
		});
	}
	handlePriorityInputChange = (e) => {
		this.setState({
			priorityInput: e.target.value
		});
	}

	handleAddTodoClick = (e) => {
		e.preventDefault();
	}
}


export default NewTodoForm;