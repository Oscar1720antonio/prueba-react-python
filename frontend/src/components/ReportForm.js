import React, {useEffect, useCallback, useMemo, useRef, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const endpoint = 'http://127.0.0.1:8000/api/v1/student/'
const ReportForms = () => {
    const [rowData, setRowData] = useState([])
    useEffect ( ()=> {
        getAllForms()
    }, [])
    const navigate = useNavigate()
    const getAllForms = async () => {
        const response = await axios.get(`${endpoint}`)
        setRowData(response.data)
    }

    const [columnDefs] = useState([
        {
          width: 20,
          checkboxSelection: true,
          headerCheckboxSelection: true,
        },
        { width: 100,headerName: 'Carnet', field: 'carnet', },
        { width: 100,headerName: 'Nombre', field: 'name', },
        { width: 100, headerName: 'Apellidos', field: 'last_name',},
        { width: 120, headerName: 'Direccion', field: 'address',},
        { width: 100,headerName: 'Genero', field: 'gender',filter: true,floatingFilter: true},
        { width: 180, headerName: 'Carrera', field: 'career',filter: true,floatingFilter: true},
        { width: 150, headerName: 'Genero Poesia', field: 'liric_gender',filter: true,floatingFilter: true},
        { width: 120,headerName: 'Fecha Inscripcion', field: 'registration_day',filter: true,floatingFilter: true},
      ]);
     
    const goBack = () => {
        navigate(-1);
      };
  return (
    <div className="container1">
           <div className="tableu">
                           {/* <tbody>
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
                        </td>
                    </tr>
                ))}                
                    </tbody> */}
                    
                    <h2>Alumnos Inscritos Para Declamar</h2>
                    <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        rowSelection={'multiple'}>
                    </AgGridReact>
                </div>
                <div className="row">
                    <div className='mb-3 col-6'>
                        <button onClick={goBack} className="btn btn-outline-warning">Cancelar</button>
                    </div>
                    <div className='mb-3 col-6'>
                        <Link to="/print" className='btn btn-outline-success'>Imprimir Reporte</Link>
                    </div>
                </div>
           </div>
           

    </div>
  )
}

export default ReportForms