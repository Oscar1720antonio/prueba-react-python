import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Moment from 'react-moment';
/// endpoint de la api en django
const endpoint = 'http://127.0.0.1:8000/api/v1/student/'
// funcion de creacion de formulario
const CreateForm = () => {
    const date = new Date();
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
    // variable de envio en este caso post
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {carnet: carnet, name: name, last_name: last_name, address: address, 
            gender: gender, career: career,phone: phone,birthday: birthday, liric_gender: liric_gender, registration_day: registration_day})
        navigate('/')
        console.log(endpoint)
    }
    //funcion de navegacion en boton regresar
    const goBack = () => {
        navigate(-1);
      };
  return (
    <div className="container1">
        
        <form onSubmit={store} className="form">
            <h2>Ingresar Nueva Solicitud</h2>
            
                <div className='mb-3 col-6'>
                    <label className='form-label'>Carnet</label>
                    <input 
                        value={carnet} 
                        onChange={ (e)=> setCarnet(e.target.value)}
                        type='text'
                        className='form-control'
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
                    <option value="Lirica">lírica</option>
                     <option value="Epica">épica</option>
                     <option value="Dramatica">dramática</option>
                    </select>
                </div>       
                <div className='mb-3 col-6'>
                        <label className='form-label'>Fecha de Declaratoria</label>
                        <input 
                            value={registration_day} 
                            onChange={ (e)=> setRegistration_day(e.target.value)}
                            type='date'
                            //disabled = 'disabled'
                            className='form-control'
                        />
                </div>
               {/*  <div className='mb-3 col-6'>
                    <Moment format="YYYY/MM/DD"  add={{ days: 3}}>{birthday}</Moment>
                </div>
                <div className='mb-3 col-6'>
                    <Moment element="span">{birthday}</Moment>
                </div> */}
                </div>
            <div className="row">
                <div className='mb-3 col-6'>
                    <button onClick={goBack} className="btn btn-outline-warning">Cancelar</button>
                </div>
                <div className='mb-3 col-6'>
                    <button type='submit' className='btn btn-outline-danger'>Enviar</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreateForm