
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
    <Navbar></Navbar>
      <h2 className='text-3xl text-red-700'>Hello World</h2>
      <Outlet></Outlet>
    </>
  )
}

export default App
