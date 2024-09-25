import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    return (
        <div className="container" style={{ width: '98%' }}>
            <div className="card d-flex flex-row" style={{ width: '100%', borderRadius: '15px' }}>
                <img
                    src='./assets/portrait-man-laughing.jpg'
                    alt="Usuario"
                    className="card-img-left photoProfile"
                />
                <div className="card-body">
                    <h2 className="card-title">Hola!</h2>
                    <h3 className="card-text">Bienvenid@ a portal</h3>
                </div>
            </div>
            <div className="row" style={{ marginTop: '20px'}}>
                {[
                    { title: "TIPO DE IDENTIFICACIÓN", imgSrc: './assets/address-card-regular.svg' },
                    { title: "NÚMERO DE IDENTIFICACIÓN", imgSrc: './assets/address-card-regular.svg' },
                    { title: "NOMBRE COMPLETO", imgSrc: './assets/user-circle-regular.svg' },
                    { title: "FECHA DE NACIMIENTO", imgSrc: './assets/calendar-regular.svg' },
                    { title: "SEXO BIOLÓGICO", imgSrc: './assets/venus-mars-solid.svg' },
                    { title: "DIRECCIÓN DE RESIDENCIA", imgSrc: './assets/home-solid.svg' },
                    { title: "NÚMERO DE CELULAR", imgSrc: './assets/phone-alt-solid.svg' },
                    { title: "CORREO ELECTRÓNICO", imgSrc: './assets/envelope-regular.svg' },
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
                            </div>
                            <p></p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Profile;