import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => <div 
  style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} 
  className="todo">
  {todo.text}
    <div>
        <button onClick={() => removeTodo(index)}>x</button>
        <button onClick={() => completeTodo(index)}>{todo.isCompleted ? "Completed" : "Complete"}</button>
    </div>
</div>;

export default Todo;