import { combineReducers } from 'redux'
import counter from './counter'
import bookReducer from './bookReducer'

export default combineReducers({
  counter,
  bookReducer
})
