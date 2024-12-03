import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from "../CountSevecis/LoginServies/LoginAction";

function Nav() {
    const user = useSelector(state => state.loginReducer.user);
    const dispatch = useDispatch();
    console.log(user);
    return (
        <div>this is Navbar for {user}
        <button onClick={()=>dispatch(logoutAction())}>Logout</button></div>
        
    )
}

export default Nav
