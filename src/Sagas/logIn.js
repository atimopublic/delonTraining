import { takeLatest, call, put } from "redux-saga/effects";
import {LOG_IN} from '../Actions/demoAction';
import { sessionService } from 'redux-react-session';


export default function* logInWatcher(){

    yield takeLatest(LOG_IN, logInWorker );

}

export function* logInWorker(action){

    // API Call
    // Maintain Backend session
 
    yield sessionService.saveSession();
    yield sessionService.saveUser(action.data);

}
