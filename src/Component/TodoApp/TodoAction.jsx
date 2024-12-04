import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./TodoConostant"

export const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST,
    }
}
export const getTodoSuccess = (todo) => {
    return {
        type: GET_TODO_SUCCESS,
        payload:todo,
    }
}
export const getTodoFailed = (error) => {
    return {
        type: GET_TODO_FAILED,
        payload: error
    }
}