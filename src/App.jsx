
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

//main app function
function App() {

  return (
    <>
        <Navbar />
        <Outlet/>
    </>
  )
}

export default App
