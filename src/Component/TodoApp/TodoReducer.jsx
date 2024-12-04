import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./TodoConostant";

const initialTodoState = {
    todo: [],
    isLoading: false,
    isError:null
}
const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
             isLoading: true   
            };
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
             todo: action.payload
            };
        case GET_TODO_FAILED:
            return {
                ...state,
                isLoading: false,
             isError:action.payload
            };
            
    
        default:
            return state;
    }
}
export default todoReducer;