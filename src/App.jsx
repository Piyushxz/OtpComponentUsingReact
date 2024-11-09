import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import { Otp } from './components/Otp'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>

    </div>
    {/* <div className='grid sm:grid-cols-12 grid-cols-1'>
    <div className='sm:col-span-5 bg-blue-200 col-span-1'>
      Hi there from 1st div
    </div>
    <div className='sm:col-span-5 bg-yellow-200 col-span-1'>
      Hi there from 2nd div
    </div>
    <div className='sm:col-span-2 bg-red-200 col-span-1'>
      Hi there from 3rd div
    </div>
    </div> */}
   <Routes>
    <Route path='/' element={<LandingPage/> }/>
    <Route path='/verify' element={  <div className='h-screen flex justify-center '>
      <Otp/>
    </div>}/>
   </Routes>
     

   
    </>
  )
}

export default App
