import { combineReducers } from "redux";
import { CounterReducer } from "./reducer";


export const reducer =  combineReducers({
    CounterReducer: CounterReducer
})