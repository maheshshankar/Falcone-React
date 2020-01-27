import PlanetReducer from './planetReducer';
import UserReducer from './userReducer';
import {combineReducers} from 'redux';
const rootReducer = () => combineReducers(PlanetReducer, UserReducer);

export default rootReducer