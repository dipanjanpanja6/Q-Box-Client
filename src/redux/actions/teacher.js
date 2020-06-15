import {TEACHERLOGIN} from '../type'
import { url } from '../../config/config'
import { toast } from 'react-toastify'





export const login = (data) => (dispatch) => {
    fetch(`${url}/api/teacher/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify(data)
    }).then(res => {
        res.json().then(d => {
            console.log(d);
            dispatch({
                type: TEACHERLOGIN,
                payload: d
            })

        })
    }).catch(r => {
        console.log(r);
        toast.error('Something went wrong ! Try again')
    })
}