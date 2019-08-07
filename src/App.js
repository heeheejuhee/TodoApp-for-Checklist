import React, {Component} from 'react';
// import logo from './logo.svg';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id:1,
          content:'Eat Lunch'
        },
        {

          id:2,
          content:'Have a drink'
        }
        
      ]
    };
  }

  addTodo = (data) => {
    var newTodo = {
      id: Date.now(),
      ...data
    };
    var todos = [newTodo,...this.state.todos];
    this.setState({todos});
  }

  removeTodo = (id) => {
    var todos = this.state.todos;
    var filtered = todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: filtered
    });
  }

  updateTodo = (id,data) => {

    var todos = this.state.todos;

    var index = todos.findIndex((item) => {
      return item.id == id;
    });


    var updatedItem = {...todos[index],...data}
    todos[index] = updatedItem;
    this.setState({
      todos: todos
    });
  }


  render(){
    return (
      <div className="wrap">
        <NewTodoForm addTodo={this.addTodo}/>
        <div className="todos">
          {
            this.state.todos.map((todo) => {

              var todoProps = {
                ...todo,
                key: todo.id

              };
              return (
                <Todo {...todoProps}/>
              )
            })
          }


         

        </div>
      </div>


    );
  }
  
}

export default App;
