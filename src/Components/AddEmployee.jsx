import React, {useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import {useNavigate, useParams } from 'react-router-dom'


const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigator = useNavigate();
    const {id} = useParams();

const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
});
const handleLasttName = (e) => setLastName(e.target.value);

const handleEmail = (e) => setEmail(e.target.value);

useEffect(() => {
    if(id){
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }).catch((error)=>{
            console.log(error);
        })
    }
}, [id]);
function saveOrUpdateEmployee(e){
    e.preventDefault();

    if(validatForm()){
        const employee = {firstName, lastName, email};
        if(id) {
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigator("/employees");
            }).catch((error) => {
                console.log(error);
            })
        }else{
            
            createEmployee(employee).then((response) => {
       
                console.log(employee); 
                navigator('/employees');
            });
        }
    }
}

function validatForm(){
    let valid = true;
    const errorCopy = {... errors};

    if(firstName.trim()){
        errorCopy.firstName = '';
    }else{
        errorCopy.firstName = 'First name is required!';
        valid = false;
    }
    if(lastName.trim()){
        errorCopy.lastName = '';
    }else{
        errorCopy.lastName = 'Last name is required!';
        valid = false;
    }
    if(email.trim()){
        errorCopy.email = '';
    }else{
        errorCopy.email = 'Email is required!';
        valid = false;
    }

    setErrors(errorCopy);
    return valid;
}

function pageTitle(){
    if(id){
        return <h2>Update Employee</h2>
         
    }else{
        return  <h2>Add Employee</h2>
    }
}
  return (
    <div className='container'>
        <dir className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-header">
                   {
                    pageTitle()
                   }
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label htmlFor="firstName" className='form-label'>First Name:</label>
                            <input 
                            type="text" 
                            id='firstName'
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}` }
                            placeholder='Type employee first name'
                            value={firstName}
                            onChange={ (e) => setFirstName(e.target.value) }
                            />
                            { errors.firstName && <div className='invalid-feedback'>{errors.firstName} </div> }

                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="lastName" className='form-label'>Last Name:</label>
                            <input 
                            type="text"
                            id='lastName' 
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}` } 
                            placeholder='Type employee last name'
                            value={lastName}
                            onChange={handleLasttName}
                            />
                            { errors.lastName && <div className='invalid-feedback'>{errors.lastName} </div> }
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="email" className='form-label'>Email:</label>
                            <input 
                            type="email" 
                            id="email"
                            autoComplete='email'
                            className={`form-control ${errors.email ? 'is-invalid' : ''}` }  
                            placeholder='Type employee email'
                            value={email}
                            onChange={handleEmail}
                            />
                            { errors.email && <div className='invalid-feedback'>{errors.email} </div> }
                        </div>
                        <button className="btn btn-success" type="submit" onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </dir>
    </div>
  )
}

export default AddEmployee
