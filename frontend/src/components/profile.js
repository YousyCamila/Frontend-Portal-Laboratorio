import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    // Estado para almacenar los datos del paciente
    const [paciente, setPaciente] = useState({});

    // Fetch a la API para obtener los datos del paciente
    useEffect(() => {
        const fetchPacienteData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/paciente');
                if (response.ok) {
                    const data = await response.json();
                    setPaciente(data); // Guardamos la información del paciente en el estado
                } else {
                    console.error('Error al obtener los datos del paciente');
                }
            } catch (error) {
                console.error('Error al hacer la solicitud:', error);
            }
        };

        fetchPacienteData();
    }, []);

    return (
        <div className="container" style={{ width: '98%' }}>
            <div className="card d-flex flex-row" style={{ width: '100%', borderRadius: '15px' }}>
                <img
                    src='./assets/portrait-man-laughing.jpg'
                    alt="Usuario"
                    className="card-img-left photoProfile"
                />
                <div className="card-body">
                    <h2 className="card-title">Hola, {paciente.nombre || 'Cargando...'}</h2>
                    <h3 className="card-text">Bienvenid@ a portal</h3>
                </div>
            </div>
            <div className="row" style={{ marginTop: '20px'}}>
                {[
                    { title: "TIPO DE IDENTIFICACIÓN", value: paciente.tipoIdentificacion || 'Cargando...', imgSrc: './assets/address-card-regular.svg' },
                    { title: "NÚMERO DE IDENTIFICACIÓN", value: paciente.documento || 'Cargando...', imgSrc: './assets/address-card-regular.svg' },
                    { title: "NOMBRE COMPLETO", value: `${paciente.nombre || ''} ${paciente.apellido || ''}`.trim() || 'Cargando...', imgSrc: './assets/user-circle-regular.svg' },
                    { title: "FECHA DE NACIMIENTO", value: paciente.fechaNacimiento ? new Date(paciente.fechaNacimiento).toLocaleDateString() : 'Cargando...', imgSrc: './assets/calendar-regular.svg' },
                    { title: "SEXO BIOLÓGICO", value: paciente.sexo || 'Cargando...', imgSrc: './assets/venus-mars-solid.svg' },
                    { title: "DIRECCIÓN DE RESIDENCIA", value: paciente.direccion || 'Cargando...', imgSrc: './assets/home-solid.svg' },
                    { title: "NÚMERO DE CELULAR", value: paciente.celular || 'Cargando...', imgSrc: './assets/phone-alt-solid.svg' },
                    { title: "CORREO ELECTRÓNICO", value: paciente.email || 'Cargando...', imgSrc: './assets/envelope-regular.svg' },
                ].map((item, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card d-flex flex-row align-items-center" style={{ borderRadius: '15px' }}>
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                                className='styleIcons'
                            />
                            <div className="card-body">
                                <p className="card-text" style={{ fontSize: '10px' }}>{item.title}</p>
                                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
