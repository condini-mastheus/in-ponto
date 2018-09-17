import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'
import { auth } from '../../services/firebase'

const onAuthStateChanged = () => new Promise((resolve, reject) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      resolve(user)
    } else {
      reject(new Error('Unauthenticated user'))
    }
  })
})

export function* authUser(action) {
  try {
    const { email, password } = action
    const user = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password,
    )
    yield put(ActionCreators.authSuccess(user))
  } catch (error) {
    yield put(ActionCreators.authFailure('Credenciais inválidas'))
  }
}

export function* checkAuth() {
  try {
    const user = yield call(onAuthStateChanged)
    if (user) {
      yield put(ActionCreators.checkAuthSuccess(user))
    }
  } catch (error) {
    yield put(ActionCreators.checkAuthFailure())
  }
}

export function* logoutUser() {
  yield call([auth, auth.signOut])
  yield put(ActionCreators.logoutSuccess())
}
