import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisedMiddleWare from 'redux-promise-middleware';
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer';

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promisedMiddleWare));