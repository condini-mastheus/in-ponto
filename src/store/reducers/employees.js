import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  isSaving: false,
  saved: false,
  error: false,
  errorMessage: '',
}

export const getEmployeesRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
  isSaving: false,
  saved: false,
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

export const createEmployeesRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: true,
})

export const createEmployeesSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  saved: true,
  data: action.employee,
})

export const createEmployeesFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  saved: true,
  error: true,
  errorMessage: action.errorMessage,
})

export const HANDLERS = {
  [Types.GET_EMPLOYEES_REQUEST]: getEmployeesRequest,
  [Types.GET_EMPLOYEES_SUCCESS]: getEmployeesSuccess,
  [Types.GET_EMPLOYEES_FAILURE]: getEmployeesFailure,
  [Types.CREATE_EMPLOYEES_REQUEST]: createEmployeesRequest,
  [Types.CREATE_EMPLOYEES_SUCCESS]: createEmployeesSuccess,
  [Types.CREATE_EMPLOYEES_FAILURE]: createEmployeesFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS)
