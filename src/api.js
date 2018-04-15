import {v4} from 'uuid'

const fakeDataBase = {
  todoList: [{
    id: v4(),
    task: 'hey',
    completed: false
  }, {
    id: v4(),
    task: 'oh',
    completed: false
  }, {
    id: v4(),
    task: 'let go',
    completed: false
  }]
}

const delay = (ms) => 
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodoList = (filter) => 
  delay(500).then(() => {
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