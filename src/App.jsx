import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Counter from './components/Counter'
import Three from './components/Three'
import Formbasics from './components/Formbasics'
import ApiGet from './components/ApiGet'
import Api from './components/Api'
import GridCard from './components/GridCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Statebasic/>}/>
    <Route path='/l' element={<First/>}/>
    <Route path='/r' element={<Reg data={{Name:"Adwaid",Age:20,place:"Kodanad"}}/>}/>
    <Route path='/t' element={<Tab/>}/>
    <Route path='/c' element={<Counter/>}/>
    <Route path='/d' element={<Three/>}/>
    <Route path='/f' element={<Formbasics/>}/>
    <Route path='/a' element={<ApiGet/>}/>
    <Route path='/p' element={<Api/>}/>
    <Route path='/gc' element={<GridCard/>}/>







    </Routes> 

    
    </>
  )
}

export default App
