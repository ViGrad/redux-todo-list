import { ADD_TODO, TOOGLE_TODO } from '../actions/enum'

import reducer from './todo'

describe('todo reducer', () => {
  const givenState = {
    id: 1,
    task: 'Learn redux',
    completed: false
  }

  it('add todo reducer', () => {
    const givenAction = {
      type: ADD_TODO,
      id: 2,
      task: 'Go shopping'
    }

    const expectedState = {
      id: 2,
      task: 'Go shopping',
      completed: false
    }

    expect(
      reducer(undefined, givenAction)
    ).toEqual(expectedState)
  })

  it('toogle todo reducer', () => {
    const givenAction = {
      type: TOOGLE_TODO,
      id: 1
    }

    const expectedState = {
      id: 1,
      task: 'Learn redux',
      completed: true
    }

    expect(
      reducer(givenState, givenAction)
    ).toEqual(expectedState)
  })
})
