import {combineReducers} from "redux"
import counterReducer from "./counterReducer"
import newsReducer from "./newsReducer"

// state = {count:5}: small state from small reducer
// state = {allNews:[]}: small state from small reducer

export default combineReducers ({
    count: counterReducer, 
    news: newsReducer
})

//BIG STATE from big reducer combines small reducer's states: 
//state {
//     count: {count: 5}, 
//     news: {allNews: []}
// }