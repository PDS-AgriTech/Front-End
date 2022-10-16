import React ,{useState , useEffect} from 'react'
import EmployeeService from '../all_services/EmployeeService'
import { Link } from 'react-router-dom'


const TableEmployeeComponent = () => {
 
 const [employees, setEmployees] = useState([])

  useEffect(() => {

    getAllEmployes();
  
    
  }, [])



  const getAllEmployes = () => {
    EmployeeService.getAllEmployes().then((response) => {
        setEmployees(response.data)
        console.log(response.data)
 }).catch(error => {
       console.log(error);

 })

  }
  

  const deleteemployee = (employeenumero) => {
      EmployeeService.DeleteEmployee(employeenumero).then((response) => {
        getAllEmployes();
    })
}
  

  return (
    <div className= "container">
        <h2 className="text-center"> La Liste Totale des Employees </h2>
        <Link to ="/ajouter-employe" className="btn btn-primary mb-2"> Ajouter un employé </Link>
        <table className="table table-bordered table-striped">
             <thead className="head">
           <th> Numéro de l'employé </th>
           <th> Departement de l'employé</th>
           <th> Prénom de l'employé </th>
           <th> Nom de l'employé </th>
           
           </thead>
           <tbody>
               {
                   employees.map(
                       employee => 
                       <tr key = {employee.numero}> 
                       <td> {employee.numero} </td>
                        <td> { employee.dept } </td>
                       <td> { employee.prenom} </td>
                       <td>  { employee.nom} </td>
                       <td>
                           <Link className="btn btn-info" to={`/modifier-employe/${employee.numero}`} > Modifier </Link>
                           <button className = "btn btn-danger" onClick = {() => deleteemployee(employee.numero)}
                                    style = {{marginLeft:"10px"}}> Supprimer </button>
                       </td>
            
                       </tr>
                   )
               }


           </tbody>


        </table>
          
      
    </div>
  )
}

export default TableEmployeeComponent