import {useState, useEffect} from 'react'
import { listEmployees } from '../services/EmployeeService.js'
import { useNavigate } from 'react-router-dom';

function EmployeesList() {
    
   const [employees, setEmployees] = useState([]);

   const navagator = useNavigate();


   useEffect(() => {
    listEmployees().then((response)=> {
        setEmployees(response.data);
    }).catch(error =>{
        console.error(error );
    })

   }, [])

   function addNewEmployee(){
        navagator('/add-employee')
   }

   function editEmployee(id){
    
   }


  return (
    <div className='container'>
        <h1 className="text-center">List of All Employees</h1>
        <button className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-hover table-bordered text-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
               
            </thead>
            <tbody>
               {
                employees.map(employee => <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td><button className='btn btn-info' onClick={() => editEmployee(employee.id)}>Edit</button></td>
                </tr>)
               }
              
            </tbody>
        </table>
    </div>
  )
}

export default EmployeesList
