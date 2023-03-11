import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/form/'

const EditForm = () => {

    const [carnet, setCarnet] = useState('')
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [sex, setSex] = useState('')
    const [carrer, setCarrer] = useState('')
    const [fecha_nac, setFecha_nac] = useState('')
    const [poesia, setPoesia] = useState('')
    const [fecha_dec, setFecha_dec] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            carnet: carnet, name: name, last_name: last_name, address: address, 
            sex: sex, carrer: carrer,phone: phone,fecha_nac: fecha_nac, poesia: poesia, fecha_dec: fecha_dec
        })
        navigate('/')
    }

    useEffect( () =>{

        const getFormById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setCarnet(response.data.carnet)
            setName(response.data.name)
            setLastName(response.data.last_name)
            setPhone(response.data.phone)
            setAddress(response.data.address)
            setSex(response.data.sex)
            setCarrer(response.data.carrer)
            setFecha_nac(response.data.fecha_nac)
            setPoesia(response.data.poesia)
            setFecha_dec(response.data.fecha_dec)
        }
        getFormById()
        
    }, [])
  return (
    <div className="container1">
        
        <form onSubmit={update} className="form">
            <h2>Editar Solicitud #{id}</h2>
            
                <div className='mb-3 col-6'>
                    <label className='form-label'>Carnet</label>
                    <input 
                        value={carnet} 
                        onChange={ (e)=> setCarnet(e.target.value)}
                        type='text'
                        className='form-control'
                        disabled = 'disabled'
                    />
                </div>
            <div className="row">
                <div className='mb-3 col-6'>
                    <label className='form-label'>Nombres</label>
                    <input 
                        value={name} 
                        onChange={ (e)=> setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3 col-6'>
                    <label className='form-label'>Apellidos</label>
                    <input 
                        value={last_name} 
                        onChange={ (e)=> setLastName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
            </div>
            <div className="row">
                <div className='mb-3 col-9'>
                    <label className='form-label'>Direccion</label>
                    <input 
                        value={address} 
                        onChange={ (e)=> setAddress(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3 col-3'>
                    <label className='form-label'>Genero</label>
                    <select
                        value={sex} 
                        onChange={ (e)=> setSex(e.target.value)}
                        type='text'
                        className='form-control'
                    >
                    <option value=""></option>
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                    </select>
                </div>
                <div className='mb-3 col-6'>
                    <label className='form-label'>Telefono</label>
                    <input 
                        value={phone} 
                        onChange={ (e)=> setPhone(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3 col-6'>
                <label className='form-label'>Fecha Nacimiento</label>
                <input 
                    value={fecha_nac} 
                    onChange={ (e)=> setFecha_nac(e.target.value)}
                    type='date'
                    className='form-control'
                />
                </div>
                <div className='mb-3 col-12'>
                    <label className='form-label'>Carrera</label>
                    <input 
                        value={carrer} 
                        onChange={ (e)=> setCarrer(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
            </div>

            <div className="row">
                <div className='mb-3 col-6'>
                    <label className='form-label'>Tipo de Poesia</label>
                    <select 
                        value={poesia} 
                        onChange={ (e)=> setPoesia(e.target.value)}
                        type='select'
                        className='form-control'
                    >
                    <option value=""></option>
                    <option value="lirica">lírica</option>
                    <option value="epica">épica</option>
                    <option value="dramatica">dramática</option>
                    </select>
                </div>     
                <div className='mb-3 col-6'>
                        <label className='form-label'>Fecha de Declaratoria</label>
                        <input 
                            value={fecha_dec} 
                            onChange={ (e)=> setFecha_dec(e.target.value)}
                            type='date'
                            disabled = 'disabled'
                            className='form-control'
                        />
                </div>
            </div>
            <button type='submit' className='btn btn-success'>Enviar</button>
        </form>

    </div>
  )
}

export default EditForm