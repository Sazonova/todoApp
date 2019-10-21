import React, {useState} from 'react';
import './App.css';

import Header from './components/Header';
import TodoList from './components/Todolist';
import TodoForm from './components/TodoForm';



function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header todos={todos} />
      <TodoList 
        todos={todos} 
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      /> 
      <TodoForm addTodo={addTodo} />   
    </div>
  );
}

export default App;
