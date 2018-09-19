import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export const authUser = ({ api }) => function* (action) {
  try {
    const { email, password } = action
    const data = yield call(api.onAuthWithCredentials, email, password)

    const {
      uid, displayName, emailVerified, photoURL, isAnonymous, providerData,
    } = data.user

    let user = yield call(api.getUser, uid)

    user = {
      ...user,
      uid,
      displayName,
      emailVerified,
      photoURL,
      isAnonymous,
      providerData,
    }

    yield put(ActionCreators.authSuccess(user))
  } catch (error) {
    yield put(ActionCreators.authFailure('Credenciais inválidas'))
  }
}

export const checkAuth = ({ api }) => function* () {
  try {
    const data = yield call(api.onAuthStateChanged)

    const {
      uid, displayName, emailVerified, photoURL, isAnonymous, providerData,
    } = data

    let user = yield call(api.getUser, uid)

    user = {
      ...user,
      uid,
      displayName,
      emailVerified,
      photoURL,
      isAnonymous,
      providerData,
    }

    yield put(ActionCreators.checkAuthSuccess(user))
    // if (user) {
    // }
  } catch (error) {
    yield put(ActionCreators.checkAuthFailure(error))
  }
}

export const logoutUser = ({ api }) => function* () {
  yield call(api.onAuthDestroy)
  yield put(ActionCreators.logoutSuccess())
}
