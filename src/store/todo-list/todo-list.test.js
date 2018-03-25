import { ADD_TODO, TOOGLE_TODO } from '../actions/enum'
import reducer from './todo-list'

describe('todo list reducer', () => {
  const givenState = [
    {
      id: 1,
      task: 'Learn redux',
      completed: false
    },
    {
      id: 2,
      task: 'go shopping',
      completed: true
    }
  ]
  

  it('add todo in todo list', () => {
    const givenAction = {
      type: ADD_TODO,
      id: 3,
      task: 'finish this test'
    }

    const expectedState = [
      {
        id: 1,
        task: 'Learn redux',
        completed: false
      },
      {
        id: 2,
        task: 'go shopping',
        completed: true
      },
      {
        id: 3,
        task: 'finish this test',
        completed: false
      }
    ]

    expect(
      reducer(givenState, givenAction)
    ).toEqual(expectedState)
  })

  it('toogle todo in todo list', () => {
    const givenAction = {
      type: TOOGLE_TODO,
      id: 1,
    }

    const expectedState = [
      {
        id: 1,
        task: 'Learn redux',
        completed: true
      },
      {
        id: 2,
        task: 'go shopping',
        completed: true
      }
    ]

    expect(
      reducer(givenState, givenAction)
    ).toEqual(expectedState)
  })
})