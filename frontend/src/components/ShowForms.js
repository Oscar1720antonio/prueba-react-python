import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowForms = () => {

    const [forms, setForms] = useState([])
    useEffect ( ()=> {
        getAllForms()
    }, [])

    const getAllForms = async () => {
        const response = await axios.get(`${endpoint}/forms`)
        setForms(response.data)
    }

    const deleteForm = async (id) => {

       await axios.delete(`${endpoint}/form/${id}`)
       getAllForms()
         
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear Formulario</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Job</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { forms.map( (form) => (
                    <tr key={form.id}>
                        <td>{form.name}</td>
                        <td>{form.last_name}</td>
                        <td>{form.job}</td>
                        <td>{form.phone}</td>
                        <td>{form.address}</td>
                        <td>{form.age}</td>
                        <td>
                            <Link to={`/edit/${form.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteForm(form.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}

export default ShowForms