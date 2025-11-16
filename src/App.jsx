import react from 'react'
import './App.css'
import EmployeesList from './Components/EmployeesList'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEmployee from './Components/AddEmployee'
import PassProps from './Components/Props/PassProps'
import ClassProps from './Components/Props/ClassProps'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //localhost:3000/ */}
          <Route path='/' element={<EmployeesList />}></Route>
          {/* //localhost:3000/employees */}
          <Route path='/employees' element={<EmployeesList />}></Route>
          {/* localhost:3000/add-employee */}
          <Route path='/add-employee' element={<AddEmployee />}></Route>
          



          <Route path='/get-props' element={<PassProps />}></Route> 
          <Route path ='get-class-props' element={<ClassProps />} ></Route>

        </Routes>
        
    
        <FooterComponent />
    
      </BrowserRouter>
     </> 
  )
}

export default App
