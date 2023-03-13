import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/v1/student/'

const EditForm = () => {

    const [carnet, setCarnet] = useState('')
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [career, setCareer] = useState('')
    const [birthday, setBirthday] = useState('')
    const [liric_gender, setLiric_gender] = useState('')
    const [registration_day, setRegistration_day] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            carnet: carnet, name: name, last_name: last_name, address: address, 
            gender: gender, career: career,phone: phone,birthday: birthday, liric_gender: liric_gender, registration_day: registration_day
        })
        navigate('/')
    }

    useEffect( () =>{

        const getFormById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            console.log('esta es la data:  ',response.data)
            setCarnet(response.data.carnet)
            setName(response.data.name)
            setLastName(response.data.last_name)
            setPhone(response.data.phone)
            setAddress(response.data.address)
            setGender(response.data.gender)
            setCareer(response.data.career)
            setBirthday(response.data.birthday)
            setLiric_gender(response.data.liric_gender)
            setRegistration_day(response.data.registration_day)
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
                        value={gender} 
                        onChange={ (e)=> setGender(e.target.value)}
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
                    value={birthday} 
                    onChange={ (e)=> setBirthday(e.target.value)}
                    type='date'
                    className='form-control'
                />
                </div>
                <div className='mb-3 col-12'>
                    <label className='form-label'>Carrera</label>
                    <input 
                        value={career} 
                        onChange={ (e)=> setCareer(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
            </div>

            <div className="row">
                <div className='mb-3 col-6'>
                    <label className='form-label'>Tipo de Poesia</label>
                    <select 
                        value={liric_gender} 
                        onChange={ (e)=> setLiric_gender(e.target.value)}
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
                            value={registration_day} 
                            onChange={ (e)=> setRegistration_day(e.target.value)}
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