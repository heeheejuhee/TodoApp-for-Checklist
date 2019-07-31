import React, {Component} from 'react';
import './App.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.todos = [
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
    ]

  }


  render() {
    return(
      <div className="wrap">
          <h1>Daily Todo Lists</h1>

          <form>
            <input type="text"/>
            <input type="submit"/>
          </form>

          <ul>
            {
              this.todos.map(function(todo){
                return (
                  <li>{todo.content}</li>
                );
              })
            }  
          </ul>

      </div>
    )
  };
};


export default TodoApp;
