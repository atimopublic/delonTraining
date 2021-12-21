import {SET_DATA, SET_PERSONAL_INFO} from '../Actions/demoAction';


const demoReducer = (state = null, action) => {

    switch(action.type){

        case SET_DATA:
            
                return {
                    demoData: action.data
                }
        case SET_PERSONAL_INFO:
                return {
                    personalInfo: action.data
                }
       
        default: 
            return state;
    }

}

export default demoReducer;
