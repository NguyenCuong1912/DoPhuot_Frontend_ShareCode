
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { QuanLyAccountReducer } from './Reducers/QuanLyAccountReducer';

const rootReducers = combineReducers({
    QuanLyAccountReducer

});

export const store = createStore(rootReducers, applyMiddleware(thunk));