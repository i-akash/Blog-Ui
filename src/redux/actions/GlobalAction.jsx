import {NAVIGATION_ITEM} from '../types/Type'

//action

export const updateNavigation=data=>({
    type:NAVIGATION_ITEM,
    payload:data
})