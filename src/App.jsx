import './App.css'
import Counter from './Component/CountSevecis/Counter'
import Navbar from './Component/Navbar/Nav'
import Login from './Component/Login/Login'
import Todo from './Component/TodoApp/Todo'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
       
        <h1>Welcome to react-redux</h1>
        <Login></Login>
        <Counter></Counter>
        <Todo></Todo>
      </div>
    </>
  )
}

export default App
