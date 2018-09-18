import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export const getEmployees = ({ api }) => function* () {
  try {
    const employees = yield call(api.getEmployees, 'k312sa0231')
    
    if (employees) {
      yield put(ActionCreators.getEmployeesSuccess(employees))
    } else {
      yield put(ActionCreators.getEmployeesFailure())
    }
  } catch (error) {
    yield put(ActionCreators.getEmployeesFailure())
  }
}
