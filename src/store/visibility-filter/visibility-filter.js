import { SET_VISIBILITY_FILTER, RESET_APP } from '../../actions/enum'

const initialState = 'SHOW_ALL'

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter

    case RESET_APP:
      return initialState

    default: 
      return state
  }
}