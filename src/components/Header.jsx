import React from 'react';
import TodoList from './Todolist';

function Header({ todos }){
    return (
        <div className="header">
          <h1>TODO APP</h1>
          <p>Total: {todos.length} Completed: {todos.filter(i => i.isCompleted === true).length} </p>
        </div>
    );
    
};

export default Header;