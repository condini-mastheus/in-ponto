import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false,
  errorMessage: '',
}

export const getEmployeesRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
})

export const getEmployeesSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  data: action.employees,
})

export const getEmployeesFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: true,
  errorMessage: action.errorMessage,
})

export const HANDLERS = {
  [Types.GET_EMPLOYEES_REQUEST]: getEmployeesRequest,
  [Types.GET_EMPLOYEES_SUCCESS]: getEmployeesSuccess,
  [Types.GET_EMPLOYEES_FAILURE]: getEmployeesFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS)
