import { combineReducers } from 'redux';
import demoReducer from './Reducers/demoReducer';
import { sessionReducer } from 'redux-react-session';


export const rootReducer = combineReducers({
    demo: demoReducer,
    session: sessionReducer
});
