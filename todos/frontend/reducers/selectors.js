// get all ToDos
export const allTodos = (state) => ( // is we have { todos } 
  Object.keys(state.todos).map(id => state.todos[id]) //can use todos; todos[id]
)