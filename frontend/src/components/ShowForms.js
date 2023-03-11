import React, {useEffect, useCallback, useMemo, useRef, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


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
    <div className="container1">
        <div className="tableu">
            <div className='col-12'>
                <Link to="/create" className='btn btn-success  mt-2 mb-2 text-white'>Crear Formulario</Link>
                <Link to="/report" className='btn btn-success  mt-2 mb-2 text-white'>Reporte de Formulario</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Carnet</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Dirrecion</th>
                        <th>Genero</th>
                        <th>Carrera</th>
                        <th>Tipo Poesia</th>
                        <th>Declamacion</th>
                    </tr>
                </thead>
                <tbody>
                    { forms.map( (form) => (
                        <tr key={form.id}>
                            <td>{form.carnet}</td>
                            <td>{form.name}</td>
                            <td>{form.last_name}</td>
                            <td>{form.address}</td>
                            <td>{form.sex}</td>
                            <td>{form.carrer}</td>
                            <td>{form.poesia}</td>
                            <td>{form.fecha_dec}</td>
                            <td>
                                <Link to={`/edit/${form.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={ ()=>deleteForm(form.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}                
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ShowForms