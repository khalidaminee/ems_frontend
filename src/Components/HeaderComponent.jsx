import React from 'react'
import { useNavigate } from 'react-router-dom';
function HeaderComponent() {
  const navigator = useNavigate();
  const home = () => {
    navigator("/employees");
  }
  return (
    <div>
        <header>
            <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
              <div className="container-md">
                <a className="navbar-brand" href="#">Employees Management System</a>
                <div>
                  <a className='navbar-brand' href="/">Home</a>
            
                  <a className="navbar-brand" href="/employees">Employees</a>
                  <a className="navbar-brand" href="/get-props">Props</a>
                  <a className="navbar-brand" href="/get-class-props">Class Props</a>
                  <a className="navbar-brand" href="/sytels-methods">Styles Methods</a>
                  <a className="navbar-brand" href="/use-effect">useEffect Hook</a>
                  <a className="navbar-brand" href="/map-method">Map Method</a>
                  <a className="navbar-brand" href="/data-table">DataTables</a>
                </div>
               
              </div>

          
                          
            </div>
        </header>
      
    </div>
  )
}

export default HeaderComponent
