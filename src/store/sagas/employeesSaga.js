import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'
import { database } from '../../services/firebase'

const connect = () => new Promise(resolve => database.ref('users').on('value', resolve))

export default function* getEmployees() {
  try {
    const employeesPromisse = yield call(connect)
    const employees = employeesPromisse.val()

    if (employees) {
      yield put(ActionCreators.getEmployeesSuccess(employees))
    } else {
      yield put(ActionCreators.getEmployeesFailure())
    }
  } catch (error) {
    yield put(ActionCreators.getEmployeesFailure())
  }
}
