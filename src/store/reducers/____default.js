import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'


const INITIAL_STATE = {

}

export const FUNCTION_Request = (state = INITIAL_STATE, action) => ({
  ...state,
})

export const FUNCTION_Success = (state = INITIAL_STATE, action) => ({
  ...state,
})

export const FUNCTION_Failure = (state = INITIAL_STATE, action) => ({
  ...state,
})

export const HANDLERS = {
  [Types.FUNCTION_REQUEST]: FUNCTION_Request,
  [Types.FUNCTION_SUCCESS]: FUNCTION_Success,
  [Types.FUNCTION_FAILURE]: FUNCTION_Failure,
}

export default createReducer(INITIAL_STATE, HANDLERS)
