import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
const initialTodo: Todo[] = [
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
];

function App() {
  const [todos, setTodos] = useState(initialTodo);

  function toggleTodo(todo: Todo) {
    const todosCopy = structuredClone(todos);
    const targetTodo = todosCopy.find((target) => target.id === todo.id);
    targetTodo.completed = !targetTodo.completed;

    setTodos(todosCopy);
  }

  function deleteTodo(todo: Todo) {
    const updatedTodos = todos.filter((target) => target.id !== todo.id);
    setTodos(updatedTodos);
  }

  function addTodo(title: string) {
  const newTodo: Todo = {
    id: Math.random(),
    title: title,
    completed: false,
  };

  const updatesTodos = structuredClone(todos)
  updatesTodos.push(newTodo)

  setTodos(updatesTodos)
}

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <button
        onClick={() => {
          setTodos(initialTodo);
        }}
      >
        RESET
      </button>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(event.target.todo.value)
         
          event.target.reset()
        }}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="Add Todo"
          name="todo"
          required
          minLength={3}
        />
        <button> Add Todo</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className={todo.completed ? "todo completed" : "todo"}>
            <span
              onClick={() => {
                toggleTodo(todo);
              }}
            >
              {todo.title}
            </span>
            <button
              onClick={() => {
                deleteTodo(todo);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
