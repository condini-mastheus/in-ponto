import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['user'],
  authFailure: null,
})

export default Creators
