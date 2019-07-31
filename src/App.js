import React, {Component} from 'react';
import './App.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos : [
        {
          id:1,
          content:'Hi Juhee'
        },
        {
          id:2,
          content:'How are you '
        },
        {
          id:3,
          content:'How is the weather'
        }
      ],

      todoInputValue:''
    }
  }

  handleTodoInputChange = (e) => { 

    this.setState({
      todoInputValue:e.target.value
    })
  }

  handleAddTodoClick = (e) => {
    e.preventDefault();

    var newTodo = {
      id:Date.now(),
      content: this.state.todoInputValue
    };

    var newList = [newTodo,...this.state.todos]
    this.setState({
      todos:newList,
      todoInputValue:''
    })
  }

  removeTodo = (id) => {
    var todos = this.state.todos;

    var filteredList = todos.filter((todo) => {
      return todo.id != id;
    });

    this.setState({
      todos:filteredList
    })
  }


  render() {

    return(
      <div className="wrap">
          <h1>Daily Todo Lists</h1>

          <form>
            <input className="todo-input" type="text" value={this.state.todoInputValue} onChange={this.handleTodoInputChange }/>
            <input className="add-todo" onClick={this.handleAddTodoClick} type="submit"/>
          </form>

          <ul>
            {
              this.state.todos.map((todo) => {
                return (
                  <li><div onClick={(e) => { this.removeTodo(todo.id) }}>x</div> {todo.content}</li>
                );
              })
            }  
          </ul>

      </div>
    )
  };
};


export default TodoApp;
