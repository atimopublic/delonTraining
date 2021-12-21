import { takeLatest, call, put } from "redux-saga/effects";
import {CREATE_DATA} from '../Actions/demoAction';


export default function* demoCreateWatcher(){

    yield takeLatest(CREATE_DATA, demoCreateWorker );

}

export function* demoCreateWorker(action){

    /*

    action.type = CREATE_DATA
    action.data = "data which user has added in form"

    */


    // Do API call
    // Get repsonse from API
    // Do logical operation / Analyse data

    // Call reducer to put data in store

}
