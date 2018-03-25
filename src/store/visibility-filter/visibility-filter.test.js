import { SET_VISIBILITY_FILTER } from '../../actions/enum'

import reducer from './visibility-filter'

describe('visibility filter reducer', () => {
  const givenState = 'SHOW_ALL'

  it('switch to SHOW_COMPLETED state', () => {
    const givenAction = {
      type: SET_VISIBILITY_FILTER,
      filter: 'SHOW_COMPLETED'
    }

    const expectedState =  'SHOW_COMPLETED'

    expect(
      reducer(undefined, givenAction)
    ).toEqual(expectedState)
  })
})
