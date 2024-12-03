import { useDispatch } from "react-redux";
import { loginAction } from "../CountSevecis/LoginServies/LoginAction";


function Login() {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        dispatch(loginAction(name))
}
    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <input name="name" type="text" />
                <input  type="password" name="password" id="" />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login
