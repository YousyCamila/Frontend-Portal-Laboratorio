import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    // Datos del paciente estáticos
    const paciente = {
        nombre: "Juan",
        apellido: "Pérez",
        tipoIdentificacion: "Cédula de Ciudadanía",
        documento: "123456789",
        fechaNacimiento: "1993-08-15", // Formato YYYY-MM-DD
        sexo: "Masculino",
        direccion: "Calle 123 #45-67",
        celular: "300-123-4567",
        email: "juan.perez@example.com"
    };

    return (
        <div className="container" style={{ width: '98%' }}>
            <div className="card d-flex flex-row" style={{ width: '100%', borderRadius: '15px' }}>
                <img
                    src='./assets/portrait-man-laughing.jpg'
                    alt="Usuario"
                    className="card-img-left photoProfile"
                />
                <div className="card-body">
                    <h2 className="card-title">Hola, {paciente.nombre}</h2>
                    <h3 className="card-text">Bienvenid@ a portal</h3>
                </div>
            </div>
            <div className="row" style={{ marginTop: '20px' }}>
                {[
                    { title: "TIPO DE IDENTIFICACIÓN", value: paciente.tipoIdentificacion, imgSrc: './assets/address-card-regular.svg' },
                    { title: "NÚMERO DE IDENTIFICACIÓN", value: paciente.documento, imgSrc: './assets/address-card-regular.svg' },
                    { title: "NOMBRE COMPLETO", value: `${paciente.nombre} ${paciente.apellido}`, imgSrc: './assets/user-circle-regular.svg' },
                    { title: "FECHA DE NACIMIENTO", value: new Date(paciente.fechaNacimiento).toLocaleDateString(), imgSrc: './assets/calendar-regular.svg' },
                    { title: "SEXO BIOLÓGICO", value: paciente.sexo, imgSrc: './assets/venus-mars-solid.svg' },
                    { title: "DIRECCIÓN DE RESIDENCIA", value: paciente.direccion, imgSrc: './assets/home-solid.svg' },
                    { title: "NÚMERO DE CELULAR", value: paciente.celular, imgSrc: './assets/phone-alt-solid.svg' },
                    { title: "CORREO ELECTRÓNICO", value: paciente.email, imgSrc: './assets/envelope-regular.svg' },
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
