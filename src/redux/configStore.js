
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { QuanLyAccountReducer } from './Reducers/QuanLyAccountReducer';
import { QuanLyCategoryReducer } from './Reducers/QuanLyCategoryReducer';
import { QuanLyProductReducer } from './Reducers/QuanLyProductReducer';

const rootReducers = combineReducers({
    QuanLyAccountReducer,
    QuanLyCategoryReducer,
    QuanLyProductReducer

});

export const store = createStore(rootReducers, applyMiddleware(thunk));