import {LOGIN,REFRESH} from '../types/Type'
import api from '../../api/AuthApi'
import jwtDecode from 'jwt-decode'

//action

const loginAction=data=>({
    type:LOGIN,
    payload:data
})

const refreshAction=data=>({
    type:REFRESH,
    payload:data
})




// Asynchronus action

export const login=data=>dispatch=>api.login(data).then(user=>{
                                                                localStorage.setItem("jwtToken",user.jwtToken)
                                                                return dispatch(loginAction(user))
                                                            }
                                                        )

export const refresh=()=>dispatch=>{
    let token=localStorage.getItem("jwtToken")
    let decoded=jwtDecode(token);
    let exp=decoded['exp']
    let currentTime=new Date().getTime()/1000;

    let userId="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid";
    let fullname="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
    
    if(exp>=currentTime)
        dispatch(refreshAction({userId:decoded[userId],fullName:decoded[fullname]}))
    else 
        dispatch(loginAction({}))
}

export const logout=()=>dispatch=>{
                                    localStorage.clear();
                                    return dispatch(loginAction({}))
                                 }
                                                