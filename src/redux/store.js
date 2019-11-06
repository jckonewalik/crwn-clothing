import { createStore, applyMiddleware } from 'redux'
import persistedReducer from './root.reducer'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'

import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
