import {LOGIN,REFRESH,UPDATE_PASSWORD} from '../types/Type'

export default (state={},action={})=>{
    switch(action.type){
        case LOGIN:return !!action.payload.userId===true ? {userId:action.payload.userId,fullName:action.payload.firstName+" "+action.payload.lastName} :{};
        case REFRESH:return action.payload
        case UPDATE_PASSWORD : return {...state}
        default :return state
    }
}