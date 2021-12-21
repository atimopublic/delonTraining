import { all } from "redux-saga/effects";
import demoSaga from './Sagas/demoSaga';
import logIn from './Sagas/logIn';
import logOut from './Sagas/logOut';

export function* rootSaga (){

    yield all(
        [
            demoSaga(),
            logIn(),
            logOut()
        ]
    );

}
