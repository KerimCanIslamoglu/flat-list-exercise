import {UPDATE_LIST,ADD_LIST_LOCAL,SET_LIST} from './types'

import AsyncStorage from '@react-native-community/async-storage'

export const updateList=(payload)=>{
    return (dispatch)=>{
        dispatch({type:UPDATE_LIST,payload})
    }
}

export const getList=()=>{
    return async (dispatch)=>{
        let data=await AsyncStorage.getItem(ADD_LIST_LOCAL)

        if(data){
            dispatch({type:SET_LIST,payload:JSON.parse(data)})
        }
    }
}