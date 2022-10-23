import axios from "axios";

const EMPLOYEE_REST_API = 'http://172.31.253.226:202/api/Emp'
const EMPLOYEE_REST_API_ADD = 'http://172.31.253.226:202/api/Emp/add'
const EMPLOYEE_REST_API_UPDATE ='http://172.31.253.226:202/api/Emp/update'
const EMPLOYEE_REST_API_DELETE ='http://172.31.253.226:202/api/Employee/delete'


class EmployeeService{

    getAllEmployes(){
        return axios.get(EMPLOYEE_REST_API)
    }
    CreateEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_ADD , employee)
    }
    SelectEmployeeById(id){
        return axios.get(EMPLOYEE_REST_API + '/' +id)
    }
    
    UpdateEmployee(id, employee)
    {
        return axios.put(EMPLOYEE_REST_API_UPDATE + '/' + id, employee)
    }

    DeleteEmployee(id)
    {
        return axios.delete(EMPLOYEE_REST_API_DELETE + '/' + id)
    }
}

export default new EmployeeService();
