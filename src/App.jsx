import react from 'react'
import './App.css'
import EmployeesList from './Components/EmployeesList'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEmployee from './Components/AddEmployee'
import PassProps from './Components/Props/PassProps'
import ClassProps from './Components/Props/ClassProps'
import WorkOnUseEffectHook from './Components/Hooks/WorkOnUseEffectHook'
import WorkOnStyle from './Components/Styles Practice/workOnStyle'
import MapMethod from './Components/MapMethod'
import BootstrapDataTables from './Components/DataTables/BootstrapDataTables'
import NestedMapMethod from './Components/Nested Map/NestedMapMethod'
import ReusableComponents from './Components/ReusableComponents/ReusableComponents'
import ParentComponent from './Components/Lifting State Up/ParentComponent'
import PureComponent from './Components/Pure Component/PureComponent'
import MemoParent from './Components/Pure Component/Memo Method/MemoParent'
import UseMemoHook from './Components/Hooks/UseMemoHook/UseMemoHook'
import CreateRef from './Components/Hooks/Ref/CreateRef'
import UseRefHook from './Components/Hooks/Ref/UseRefHook'
import ForwardRefHook from './Components/Hooks/Ref/ForwardRefHook'
import ControledComponent from './Components/ControledComponent'
import UnControlledComponent from './Components/UnControlledComponent'
import HOC from './Components/HOC'
import HOC2 from './Components/HOC2'
import UseCallBackHook from './Components/Hooks/UseCallBackHook/UseCallBackHook'
import UseReducerHook from './Components/Hooks/UseCallBackHook/UseReducerHook/UseReducerHook'
import UseContextHook from './Components/Hooks/UseContextHook/UseContextHook'
import ContextAPI from './Components/Hooks/Context API/ContextAPI'




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
          {/* localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<AddEmployee />}></Route>



          <Route path='/get-props' element={<PassProps />}></Route>
          <Route path='get-class-props' element={<ClassProps />} ></Route>

          {/* work on sytels methods */}

          <Route path='/sytels-methods' element={<WorkOnStyle />}></Route>

          {/* React Hooks Routes */}
          <Route path='/use-effect' element={<WorkOnUseEffectHook />} ></Route>

          {/* Using Map Method */}
          <Route path='/map-method' element={<MapMethod />}></Route>

          {/* Data Tables */}
          <Route path='/data-table' element={<BootstrapDataTables />}></Route>

          {/* Nested Map Function */}
          <Route path='/nested-map' element={<NestedMapMethod />}></Route>
          <Route path='/reusable-button' element={<ReusableComponents />}></Route>

          {/* Lifting State Up */}
          <Route path='/lifting-state-up' element={<ParentComponent />}></Route>

          {/* Pure Component in React */}
          <Route path="/pure-component" element={<PureComponent />}></Route>

          <Route path="/memo-method" element={<MemoParent />}></Route>
          <Route path="/usememo-hook" element={<UseMemoHook />}></Route>

          {/* creatRef hook in class component */}
          {/* <Route path="/create-ref" element={ <CreateRef/>}></Route>
          <Route path="/use-ref-hook" element={ <UseRefHook />}></Route>
          <Route path="/forward-ref-hook" element={ <ForwardRefHook />}></Route> */}

          <Route path='/controlled-component' element={<ControledComponent />}></Route>
          <Route path='/uncontrolled-component' element={<UnControlledComponent />}></Route>
          <Route path='/hoc' element={<HOC />}></Route>
          {/* use Callback hook */}
          <Route path='/useCallback' element={<UseCallBackHook />}></Route>
          <Route path='/useReducer' element={<UseReducerHook />}></Route>
          <Route path='/useContext' element={<UseContextHook />}></Route>
          <Route path='/contextAPI' element={<ContextAPI />}></Route>






        </Routes>


        {/* <FooterComponent /> */}


      </BrowserRouter>
    </>
  )
}

export default App
