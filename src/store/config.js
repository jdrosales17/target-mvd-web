import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import thunkMiddleware from 'redux-thunk';
import localForage from 'localforage';

import rootReducer from '../reducers/rootReducer';

const middlewares = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: ['session'],
  stateReconciler: hardSet,
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
