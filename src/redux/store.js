import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import thunk from "redux-thunk"
import rootReducer from "./reducers/index"
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {}
//when RootReducer runs, state will be like this: 
//state {
//     count: {count: 5}, 
//     news: {allNews: []}
// }

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(thunk))
  );

export default store;
