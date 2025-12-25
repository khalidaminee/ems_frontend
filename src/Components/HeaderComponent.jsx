import React from 'react'
import { useNavigate } from 'react-router-dom';
function HeaderComponent() {
  const navigator = useNavigate();
  const home = () => {
    navigator("/employees");
  }
  return (
    <div className='responsive'>
        <header>
            <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
              <div className="container-md">
                <a className="navbar-brand" href="#">Employees Management System</a>
                <div>
                  <a className='navbar-brand' href="/">Home</a>
            
                  <a className="navbar-brand" href="/employees">Employees</a>
                  {/* <a className="navbar-brand" href="/get-props">Props</a>
                  <a className="navbar-brand" href="/get-class-props">Class Props</a>
                  <a className="navbar-brand" href="/sytels-methods">Styles Methods</a>
                  <a className="navbar-brand" href="/use-effect">useEffect Hook</a>
                  <a className="navbar-brand" href="/map-method">Map Method</a>
                  <a className="navbar-brand" href="/data-table">DataTables</a> */}
                  {/* <a className="navbar-brand" href="/nested-map">NestedMap</a> */}
                  {/* <a className="navbar-brand" href="/reusable-button">Reusable Button</a> */}
                  <a className="navbar-brand" href="/lifting-state-up">Lifting State Up</a>
                  {/* <a className="navbar-brand" href="/pure-component">Pure Component </a> */}
                  {/* <a className="navbar-brand" href="/memo-method"> Memo Method </a> */}
                  {/* <a className="navbar-brand" href="/usememo-hook"> useMemo Hook </a>
                  <a className="navbar-brand" href="/create-ref"> CreateRef Hook </a>
                  <a className="navbar-brand" href="/use-ref-hook"> UseRef Hook</a>
                  <a className="navbar-brand" href="/forward-ref-hook"> ForwardRef Hook</a> */}
                  <a className="navbar-brand" href="/controlled-component">Controlled Component</a> 
                  <a className="navbar-brand" href="/uncontrolled-component">Uncontrolled Component</a> 
                  <a className="navbar-brand" href="/hoc">HOC</a> 


                </div>
               
              </div>

          
                          
            </div>
        </header>
      
    </div>
  )
}

export default HeaderComponent
