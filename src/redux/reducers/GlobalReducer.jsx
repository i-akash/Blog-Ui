import {NAVIGATION_ITEM} from '../types/Type'


export default (state={activeItem:-1},action={})=>{
    switch(action.type){
        case NAVIGATION_ITEM:return {...state,activeItem:action.payload};
        default :return state
    }
}