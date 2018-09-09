import { combineReducers } from 'redux'

import auth from './auth'
import page from './page'

const rootReducer = combineReducers({
  auth,
  page,
})

export default rootReducer
