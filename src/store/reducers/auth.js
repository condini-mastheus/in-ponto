import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

const INITIAL_STATE = {
  isLoading: false,
  isAuth: false,
  isAuthing: false,
  isSignIn: false,
  error: false,
  errorMessage: '',
  user: {},
}

export const authRequest = (state = INITIAL_STATE) => ({
  ...state,
  isSignIn: true,
})

export const authSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSignIn: false,
  isAuth: true,
  user: action.user,
})

export const authFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSignIn: false,
  isAuth: false,
  user: {},
  error: true,
  errorMessage: action.errorMessage,
})

export const checkAuthRequest = (state = INITIAL_STATE) => ({
  ...state,
  isAuthing: true,
})

export const checkAuthSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isAuthing: false,
  isAuth: true,
  user: action.user,
})

export const checkAuthFailure = (state = INITIAL_STATE) => ({
  ...state,
  isAuthing: false,
  isAuth: false,
  user: {},
})

export const logoutRequest = (state = INITIAL_STATE) => ({
  ...state,
})

export const logoutSuccess = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
  isAuth: false,
  isAuthing: false,
  isSignIn: false,
  user: {},
})

export const HANDLERS = {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,

  [Types.CHECK_AUTH_REQUEST]: checkAuthRequest,
  [Types.CHECK_AUTH_SUCCESS]: checkAuthSuccess,
  [Types.CHECK_AUTH_FAILURE]: checkAuthFailure,

  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
}

export default createReducer(INITIAL_STATE, HANDLERS)
