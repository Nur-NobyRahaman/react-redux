import { combineReducers, createStore } from "redux";
import counterReducer from "./Reducer/CounterReducer";
import loginReducer from "./LoginServies/LoginReducer";

const rootReducer = combineReducers({
     counterReducer,
    loginReducer
}
   
)

const storeValue = createStore(rootReducer);
export default storeValue;