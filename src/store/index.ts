import { createStore, applyMiddleware, Store } from 'redux';

import rootActions from './ducks/rootActions';
import rootReducer from './ducks/rootReducer';
import middlewares from './middlewares';
import { ApplicationState } from './state';

const store: Store<ApplicationState> = createStore<ApplicationState, rootActions, any, any>(rootReducer, applyMiddleware(...middlewares));

export default store;
