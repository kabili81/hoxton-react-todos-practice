export function AddTodoForm({ addTodo }) {
    return(
    <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(event.target.text.value);

          event.target.reset();
        }}
      >
        <input
          
          type="text"
          placeholder="Add Todo"
          name="text"
          required
          minLength={3}
        />
        
        <button> Add Todo</button>
      </form>)
}