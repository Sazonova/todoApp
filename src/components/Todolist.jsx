import React from 'react';
import Todo from './Todo';

function TodoList({ todos, completeTodo, removeTodo }){
    return (
      <div className="todo-list">
        {todos.map((todo, index) => (<Todo 
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
        ))}
      </div>  
    );
};

export default TodoList;