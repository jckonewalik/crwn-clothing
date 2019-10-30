import { createStore, applyMiddleware } from 'redux';
import persistedReducer from './root.reducer';
import { logger } from 'redux-logger';

import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
