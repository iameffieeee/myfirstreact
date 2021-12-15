import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";


const AddEmployee = () =>{

   const [name, setName] =  useState ("");
   const [location, setLocation] =  useState ("");
   const [department, setDepartment] =  useState ("");
   const navigate = useNavigate();
   const {employeeId} = useParams();
  
   useEffect(
        () =>{
            if (employeeId){
                employeeService.getEmployee(employeeId) // return promise
                .then(
                    employee =>{
                        setName(employee.data.name);
                        setLocation(employee.data.location);
                        setDepartment(employee.data.department);     
                    }
                )
                .catch(
                    error =>{
                        console.error("something went wrong!", error)
                    }
                )
                }
         },[]) //add empty array for you to enter to the fields
       

   const SaveEmployee = (e) =>{
       e.preventDefault();

       if(employeeId){
           //update
           const employee = {employeeId, name, location, department};
            employeeService.putEmployee(employee) //promise
            .then(
                response =>{
                console.log("updated employee", response.data);
                navigate("/employees") 
                }
                )
            .catch(
                error =>{
                    console.error("Something went wrong!")
                }
            )
       }
       else{
            //add employee
            const employee = {name, location, department};
            employeeService.postEmployee(employee) //promise
            .then(
                response =>{
                console.log("added new employee", response.data);
                navigate("/employees") 
                }
                )
            .catch(
                error =>{
                    console.error("Something went wrong!")
                }
            )
       }  
   }

    return (
        <div className="container">
            <h3>Add Employee</h3>
                <form>
                    <div className="mb-3">
                        <label for="nameField" className="form-label">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="nameField" 
                        placeholder="Add Employee Name"
                        onChange={
                            (e) => setName(e.target.value)     
                        }
                        />
                    </div>

                    <div className="mb-3">
                        <label for="locationField" className="form-label">Location</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="locationField" 
                        placeholder="Add Employee location"
                        onChange={
                            (e) => setLocation(e.target.value)
                        }
                        />
                    </div>

                    <div className="mb-3">
                        <label for="departmentField" className="form-label">Department</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="departmentField" 
                        placeholder="Add Employee Department"
                        onChange={
                            (e) => 
                                setDepartment(e.target.value)
                              }
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => SaveEmployee(e)}>Save</button>
                   
                </form>
        </div>
    )
    }

export default AddEmployee