import { SET_VISIBILITY_FILTER } from './enum'

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})