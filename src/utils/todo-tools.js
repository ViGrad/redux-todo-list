export const getVisibileTodos = (todoList, filter) => {
  switch(filter) {
    case 'SHOW_ACTIVE':
      return todoList.filter(todo => !todo.completed)

    case 'SHOW_COMPLETED':
      return todoList.filter(todo => todo.completed)

    default:
      return todoList
  }
}