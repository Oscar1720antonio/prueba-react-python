import React, {useEffect, useCallback, useMemo, useRef, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const endpoint = 'http://127.0.0.1:8000/api/v1/student/'
const ShowForms = () => {
    const [forms, setForms] = useState([])
    useEffect ( ()=> {
        getAllForms()
    }, [])
   
    const getAllForms = async () => {
        console.log(endpoint)
        await axios.get(`${endpoint}`).then((res)=>{
            console.log(res)
            setForms(res.data)
        })
    }

    const deleteForm = async (id) => {

       await axios.delete(`${endpoint}/form/${id}`)
       getAllForms()
         
    } 
  return (
    <div className="container1">
        <div className="tableu">
            <div className="row">
                    <div className='mb-3 col-6'>
                        <Link to="/report" className='btn btn-outline-warning  mt-2 mb-2 text-white'>Reporte de Formulario</Link>
                    </div>
                    <div className='mb-3 col-6'>
                        <Link to="/create" className='btn btn-outline-success  mt-2 mb-2 text-white'>Crear Formulario</Link>
                    </div>
            </div>
            <table className='table'>
                <thead >
                    <tr class="bg-warning text-white">
                        <th>Carnet</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Dirrecion</th>
                        <th>Genero</th>
                        <th>Carrera</th>
                        <th>Tipo Poesia</th>
                        <th>Declamacion</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody className='text-white'>
                    { forms.map( (form) => (
                        <tr key={form.id}>
                            <td>{form.carnet}</td>
                            <td>{form.name}</td>
                            <td>{form.last_name}</td>
                            <td>{form.address}</td>
                            <td>{form.gender}</td>
                            <td>{form.career}</td>
                            <td>{form.liric_gender}</td>
                            <td>{form.registration_day}</td>
                            <td>
                                <Link to={`/edit/${form.id}`} className='btn btn-outline-primary'>Edit</Link>
                               {/*  <button onClick={ ()=>deleteForm(form.id)} className='btn btn-danger'>Delete</button> */}
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