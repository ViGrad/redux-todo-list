import {v4} from 'uuid'

const fakeDataBase = {
  todoList: [{
    id: v4(),
    task: 'hey',
    completed: true
  }, {
    id: v4(),
    task: 'oh',
    completed: false
  }, {
    id: v4(),
    task: 'let go',
    completed: true
  }]
}

const delay = (ms) => 
  new Promise(resolve => setTimeout(resolve, ms))

export const addTodo = (task) => 
  delay(500).then(() => {
    const todo = {
      id: v4(),
      task,
      completed: false
    }
    fakeDataBase.todoList.push(todo)
    return todo
  })

export const toogleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDataBase.todoList.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    return todo
  })

export const fetchTodoList = (filter) => 
  delay(500).then(() => {
    if(Math.random() > 0.9) {
      throw new Error('Ka-boom!')
    }

    switch(filter) {
      case 'all':
        return fakeDataBase.todoList
      case 'active':
        return fakeDataBase.todoList.filter(todo => !todo.completed)
      case 'completed':
        return fakeDataBase.todoList.filter(todo => todo.completed)
      default:
        return new Error(`Unknow filter: ${filter}.`)
    }
  })