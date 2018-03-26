export const getVisibileTodos = (todoList, filter) => {
  switch(filter) {
    case 'active':
      return todoList.filter(todo => !todo.completed)

    case 'completed':
    return todoList.filter(todo => todo.completed)

    default:
    return todoList
  }
}