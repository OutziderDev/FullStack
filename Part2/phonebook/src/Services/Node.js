import axios from "axios";

const baseURL = '/api/persons';

const getAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data)
}

const postAddPerson = newObject => {
    const request = axios.post(baseURL,newObject);
    return request.then(response => response.data)
}

const deletePerson = id => {   
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}

const updatePerson = (id,newObject) => {
    const request = axios.put(`${baseURL}/${id}`,newObject)
    return request.then(response=>response.data)
}

export default {getAll , postAddPerson, deletePerson, updatePerson}