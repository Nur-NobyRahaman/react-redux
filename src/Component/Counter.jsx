import { useDispatch, useSelector } from "react-redux"
import { decrementCounter, incrementCounter, resetCounter } from "./CountSevecis/Action/CounterAction";


function Counter() {
    // for data load in counter reducer state
    const count = useSelector(state => state.counterReducer.count)
    // for handle reducer action
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: { count}</h3>
            <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
            <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
            <button onClick={()=>dispatch(resetCounter())}>Reset</button>
        </div>
    )
}<button>Logout</button>

export default Counter
//basic terms of redux
// state
// action
//reducer
//store
