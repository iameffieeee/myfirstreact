import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeService from "../services/employeeService"


const Employee = () =>{

    const [employees, setEmployees] = useState([])

    //refresh table
    useEffect(
        () =>{
          refreshEmployeeTable();
        }
    )

    const refreshEmployeeTable =() =>{
        employeeService.getEmployees() //promise
        .then(
            response =>{
                setEmployees(response.data)
            }
        )
        .catch(
            () =>{
                console.log("Erroar. mamaya na lang ulit ^.^V")
            }
        )
    }

    const deleteEmployee =(employeeId) =>{
        employeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("successfully deleted employee!")
                refreshEmployeeTable();
            }
        )
        .catch(
            error =>{
                console.error("something went wrong!", error)
            }
        )
    }

    return(
        <div className="container">
            <h3>List of Employees </h3>
            <div>
            <table  className = "table table-hover table-light table-striped">
                <thead>
                <tr class="table-danger">
                    <td>Name</td>
                    <td>Location</td>
                    <td>Department</td>
                    <td>Action</td>
                </tr>
                </thead>   
                <tbody>
                {
                    employees.map(
                        employee => (
                            <tr key={employee.employeeId}>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                                <td>
                                    <div className ="d-grid gap-2 d-md-flex">
                                    <Link className="btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                    <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.employeeId)}>Delete</button>
                                    </div>
                                </td>
                            </tr>

                        )
                    )
                }
                </tbody>
              
                 </table>
            </div>
        </div>
    )

}

export default Employee