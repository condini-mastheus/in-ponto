import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'


const INITIAL_STATE = {
  data: [],
}

export const pageInfoRequest = (state = INITIAL_STATE, action) => ({
  ...state,
})

export const pageInfoSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.info,
})

export const pageInfoFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  data: {
    key: 404,
    icon: '',
    name: '404',
    to: '/admin/404',
  },
})

export const HANDLERS = {
  [Types.PAGE_INFO_REQUEST]: pageInfoRequest,
  [Types.PAGE_INFO_SUCCESS]: pageInfoSuccess,
  [Types.PAGE_INFO_FAILURE]: pageInfoFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS)
