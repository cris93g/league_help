import { createStore, applyMiddleware, combineReducers } from 'redux';

import promiseMiddleWare from 'redux-promise-middleware';
import leagueReducer from "./ducks/leagueReducer"

const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
leagueReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
