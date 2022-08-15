import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy Bread",
      completed: false,
    },
    {
      id: 2,
      title: "Go Shopping",
      completed: false,
    },
    {
      id: 3,
      title: "Learnig Programming",
      completed: true,
    },
  ]);

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className={todo.completed ? 'todo completed' : 'todo'}
          onClick={() => {
            const todosCopy = structuredClone(todos)
            const targetTodo = todosCopy.find(target => target.id === todo.id)
            targetTodo.completed = !targetTodo.completed

            setTodos(todosCopy)
          }}
          >
            {todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
