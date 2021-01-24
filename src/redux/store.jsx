import { createStore } from 'redux';
import  combineReducers  from './root-reducer'

const store = createStore(combineReducers);

export default store;