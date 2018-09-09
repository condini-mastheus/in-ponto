import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['user'],
  authFailure: null,

  pageInfoRequest: ['url'],
  pageInfoSuccess: ['info'],
  pageInfoFailure: null,
})

export default Creators
