import { takeLatest, call, put } from "redux-saga/effects";
import {LOG_OUT} from '../Actions/demoAction';
import { sessionService } from 'redux-react-session';

export default function* logOutWatcher(){

    yield takeLatest(LOG_OUT, logOutWorker );

}

export function* logOutWorker(action){

 
    yield sessionService.deleteSession();
    yield sessionService.deleteUser();

}
