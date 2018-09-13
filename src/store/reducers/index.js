import { combineReducers } from 'redux'

import auth from './auth'
import page from './page'
import employees from './employees'

const rootReducer = combineReducers({
  auth,
  page,
  employees,
})

export default rootReducer
