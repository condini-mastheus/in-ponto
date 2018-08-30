import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import loggerMiddleware from 'redux-logger'

import sagas from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default createStore(reducers, applyMiddleware(sagaMiddleware, loggerMiddleware))
sagaMiddleware.run(sagas)
