import {LOGIN,TEACHERLOGIN, ACTIVATE, AUTH,USER,} from '../type'

const initialState = {
    login: {},
    teacherLogin:{},
    activate:'',
    auth:"null",
    user:'',


}

export default function (state = initialState, actions) {
    switch (actions.type) {

      
        case USER:
            return {
                ...state,
                user: actions.payload
            }
        case AUTH:
            return {
                ...state,
                auth: actions.payload
            }
        case TEACHERLOGIN:
            return {
                ...state,
                teacherLogin: actions.payload
            }
        case LOGIN:
            return {
                ...state,
                login: actions.payload
            }
        case ACTIVATE:
            return {
                ...state,
                activate: actions.payload
            }


        default:
            return state

    }
}