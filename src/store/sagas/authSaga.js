import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export const authUser = ({ api }) => function* (action) {
  try {
    const { email, password } = action
    const data = yield call(api.onAuthWithCredentials, email, password)

    const { uid } = data.user

    let user = yield call(api.getUser, uid)
    user = {
      ...user,
      uid,
    }

    yield put(ActionCreators.authSuccess(user))
  } catch (error) {
    yield put(ActionCreators.authFailure('Credenciais inválidas'))
  }
}

export const checkAuth = ({ api }) => function* () {
  try {
    const user = yield call(api.onAuthStateChanged)
    yield put(ActionCreators.checkAuthSuccess(user))
    // if (user) {
    // }
  } catch (error) {
    yield put(ActionCreators.checkAuthFailure())
  }
}

export const logoutUser = ({ api }) => function* () {
  yield call(api.onAuthDestroy)
  yield put(ActionCreators.logoutSuccess())
}
