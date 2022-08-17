export function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return(
        <li className={todo.completed ? "todo completed" : ""}>
            <span
              onClick={() => {
                toggleTodo(todo);
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              x
            </button>
          </li>   
    )
}