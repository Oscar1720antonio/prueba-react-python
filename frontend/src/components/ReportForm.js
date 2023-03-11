import React, {useEffect, useCallback, useMemo, useRef, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const endpoint = 'http://localhost:8000/api'
const ReportForms = () => {
    const [forms, setForms] = useState([])
    useEffect ( ()=> {
        getAllForms()
    }, [])

    const getAllForms = async () => {
        const response = await axios.get(`${endpoint}/forms`)
        setForms(response.data)
    }

    const [columnDefs] = useState([
        {
          width: 100,
          checkboxSelection: true,
          headerCheckboxSelection: true,
        },
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
      ]);
    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);  
 
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
                    <div className="ag-theme-alpine" style={{height: 400, width: 750}}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        rowSelection={'multiple'}>
                    </AgGridReact>
                </div>
                <div className='col-4'>
                    <Link to="/print" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Imprimir Reporte</Link>
                </div>
           </div>
 

    </div>
  )
}

export default ReportForms