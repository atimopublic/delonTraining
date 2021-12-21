

//Action type for set data
export const SET_DATA = "SET_DATA";

//Action type fro create data
export const CREATE_DATA = "CREATE_DATA";

//Action type for personal info
export const SET_PERSONAL_INFO = "SET_PERSONAL_INFO";


export const LOG_IN = "LOG_IN";

export const LOG_OUT = "LOG_OUT";

export const logInAction = (data) => {
    return {
        type: LOG_IN,
        data
    }
}

export const logOutAction = (data) => {
    return {
        type: LOG_OUT 
    }
}

//Action for create
export const createDataAction = (data) => {
    return {
        type: CREATE_DATA,
        data
    }
}

//Action to set data
export const setDataAction = (data) => {
    return {
        type: SET_DATA,
        data
    }
}

//Action to set personal info
export const setPersonalInfor = data =>{

    return{
        type: SET_PERSONAL_INFO,
        data
    }
}

