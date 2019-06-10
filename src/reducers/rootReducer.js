import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localForage from 'localforage';

import session from './sessionReducer';

const sessionPersistConfig = {
  key: 'session',
  storage: localForage,
  blacklist: ['isLoading', 'errors'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, session),
});

export default rootReducer;
