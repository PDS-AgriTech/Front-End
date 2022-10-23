import { useEffect, useState } from 'react'
import React  from 'react'
import { Link , useParams} from 'react-router-dom'
import EmployeeService from '../all_services/EmployeeService'
import { useHistory } from 'react-router-dom'

const AddEmployeeComponent = () => {
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [dept, setDept] = useState('')
    const history = useHistory()
    const {id} = useParams()
    const SaveUpdateEmployee = (e) => {
        e.preventDefault();
        const employe = {id, prenom ,nom , dept}
        console.log(10);

        if ( id ) {
            console.log(15);
            EmployeeService.UpdateEmployee(id , employe).then((response) =>{
                console.log(2);
                history.push('/employes')
            } )

            .catch( error => {console.log(error)})

        } else{
            console.log(20);
            EmployeeService.CreateEmployee(employe).then((response) =>{ 
                console.log(response.data) 
                history.push('/employes')
             })
             .catch( error => {console.log(error)})
        }

        }
        
    useEffect(() => {

        EmployeeService.SelectEmployeeById(id).then((response) =>{
            setPrenom(response.data.prenom)
            setNom(response.data.nom)
            setDept(response.data.dept)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = () => {
        if(id) {
        return <h2 className="text-center"> Modifier L'employé</h2>

    }else {
        return <h2 className="text-center"> Ajouter L'employé</h2>

    }

    }
  return (
    <div>
         <br /><br/>
        <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Prénom :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Entrer Votre Prénom"
                                        name = "prenom"
                                        className = "form-control"
                                        value = {prenom}
                                        onChange = {(e) => setPrenom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nom :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Entrer votre Nom"
                                        name = "nom"
                                        className = "form-control"
                                        value = {nom}
                                        onChange = {(e) => setNom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Département :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Entrer votre Département"
                                        name = "dept"
                                        className = "form-control"
                                        value = {dept}
                                        onChange = {(e) => setDept(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => SaveUpdateEmployee(e)} >Valider </button>
                                <Link to="/employes" className="btn btn-danger"> Retourner </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>


    </div>
  )
}

export default AddEmployeeComponent