
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
 
  return (
    <>
      <h2 className='text-3xl text-red-700'>Hello World</h2>
      <Outlet></Outlet>
    </>
  )
}

export default App
