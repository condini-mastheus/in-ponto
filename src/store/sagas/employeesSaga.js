import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export const getEmployees = ({ api }) => function* ({ company }) {
  try {
    const employees = yield call(api.getEmployees, company)

    if (employees) {
      yield put(ActionCreators.getEmployeesSuccess(employees))
    } else {
      yield put(ActionCreators.getEmployeesFailure())
    }
  } catch (error) {
    yield put(ActionCreators.getEmployeesFailure())
  }
}

export const createEmployees = ({ api }) => function* (action) {
  try {
    const { newEmployee } = action
    const data = yield call(api.createEmployees, 'k312sa0231', newEmployee)

    const employee = { id: data.key }
    yield put(ActionCreators.createEmployeesSuccess(employee))
  } catch (error) {
    yield put(ActionCreators.createEmployeesFailure(error))
  }
}
