import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'


const INITIAL_STATE = {
  isLoading: false,
  isAuth: false,
  isAuthing: false,
  user: false,
}

export const authRequest = (state = INITIAL_STATE, action) => ({
  ...state,
})

export const authSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
})

export const authFailure = (state = INITIAL_STATE, action) => ({
  ...state,
})

export const HANDLERS = {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS)