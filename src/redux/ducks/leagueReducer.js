import axios from "axios"

const GET_SUMMONER="GET_SUMMONER"

export function get_summoner(name){
    return{
        type:GET_SUMMONER,
        payload:axios.post(name)
    }
}

const initialState={
    summoner:[]
}

export default function leagueReducer(state=initialState,action){
    switch(action.type){
        case `${GET_SUMMONER}_PENDING`:
            return{...state}
        case `${GET_SUMMONER}_FULFILLED`:
            return {...state,summoner:action.payload.data}
        case   `${GET_SUMMONER}_REJECTED`:
            return {...state}
        default:
            return state
    }
}