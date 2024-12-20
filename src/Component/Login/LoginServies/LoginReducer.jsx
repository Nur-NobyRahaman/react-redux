import { LOGIN, LOGOUT } from "./LoginConstant";

const initialLoginState = {
    user:''
}
const loginReducer = (state = initialLoginState, action) => {
    
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user:action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user:''
            }
           
    
        default:
           return state;
    }
    
}
export default loginReducer;