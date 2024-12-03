
import { LOGIN, LOGOUT } from "./LoginConstant"

export const loginAction = (user) => {
    console.log(user)
    return {
        type: LOGIN,
        payload: user
    }
}
export const logoutAction = () => {
    return {
        type: LOGOUT,
       
    }
}