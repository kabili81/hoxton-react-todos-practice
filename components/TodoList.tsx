import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"

export function TodoList({
    search,
    todos,
    setTodos,
    toggleTodo,
    deleteTodo
}) {
     const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase(). includes(search.toLowerCase())
    )

    useEffect(() => {
        fetch('http://localhost:3005/todos')
        .then (resp => resp.json())
        .then(todosFromServer => setTodos(todosFromServer))
    }, [])

    // Sa herë që ekzekutohet ky kod
   // React do të kontrollojë nëse grupi (argumenti i dytë), ka ndryshuar
   // Nëse ka ndryshuar:
   // - ekzekuton së pari funksionin e kthyer
   // - më pas, ekzekuton efektin e ri
   // Nëse nuk ndryshon: ASGJE NDODH

   // useEffect(() => {
   // console.log('EFEKTI FILLON!', numërimi)
   // fetch('http://localhost:3000/todos')
   // .then(resp => resp.json())
   // .then(todosFromServer => setTodos(todosFromServer))
   // return () => console.log('EFEKT PËRFUNDIM', numërimi)
   // }, [numërimi])
    return 
    <ul>
     {filteredTodos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
         />
     ))}
      </ul>
}