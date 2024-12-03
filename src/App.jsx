import './App.css'
import Counter from './Component/Counter'
import Navbar from './Component/Navbar/Nav'
import Login from './Component/Login/Login'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
       
        <h1>Welcome to react-redux</h1>
        <Login></Login>
        <Counter></Counter>
      </div>
    </>
  )
}

export default App
