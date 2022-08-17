import { useState } from "react";
import "./App.css";
import { Title } from "../components/Title";
import { SearchBar } from "../components/SearchBar";
import { AddTodoForm } from "../components/AddTodoForm";
import { TodoList } from "../components/TodoList";



function App() {
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  function toggleTodo(id: number) {
    // kopjo
    let todosCopy = structuredClone(todos);
    // ndrysho
    // përditësimi i kopjes
    const match = todosCopy.find(todo => todo.id === id);
    match.completed = !match.completed;

    //përditësimi i serverit
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Conten- Type": "application/json",
      },
      body: JSON.stringify(match),
    });

    //Përditësimi i gjendjes
    setTodos(todosCopy);
  }

  function deleteTodo(id: number) {
    const todosCopy = todos.filter((todo) => todo.id !== id);
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todosCopy);
  }

  function addTodo(title: string) {
    let newTodo = {
      title: title,
      completed: false,
    };

    fetch(`http://localhost:3005/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then(resp => resp.json())
      .then(todoFromServer => {
        setTodos([...todos, todoFromServer]);
      });
  }

  return (
    <div className="App">
      <Title />
      <SearchBar setSearch={setSearch} />
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        search={search}
        todos={todos}
        setTodos={setTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
