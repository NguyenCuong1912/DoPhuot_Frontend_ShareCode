
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { QuanLyAccountReducer } from './Reducers/QuanLyAccountReducer';
import { QuanLyCategoryReducer } from './Reducers/QuanLyCategoryReducer';
import { QuanLyProductReducer } from './Reducers/QuanLyProductReducer';
import { QuanLyCartReducer } from './Reducers/QuanLyCartReducer';

const rootReducers = combineReducers({
    QuanLyAccountReducer,
    QuanLyCategoryReducer,
    QuanLyProductReducer,
    QuanLyCartReducer

});

export const store = createStore(rootReducers, applyMiddleware(thunk));