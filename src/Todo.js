import React, {Component} from 'react';

class Todo extends Component {
	constructor(props){
		super(props)
		this.state = {

		};
	}

	render(){
		return(
			<div className="todo">
            	<i onClick={this.handleTodoRemoveClick} className="far fa-times-circle todo-remove"></i>
          	</div>

		)
	}
}

export default Todo;