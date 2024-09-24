import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 main">
            <div className="d-flex" style={{ width: '100%', maxWidth: '800px' }}>
                <form className="formStyle d-flex flex-column align-items-center" style={{ width: '50%', padding: '35px' }}>
                    <div className="header-text mb-4 text-center">
                        <h2>Iniciar sesión</h2>
                    </div>
                    <div className="form-group mb-3 w-100">
                        <label htmlFor="type_id">Tipo de identificación:</label>
                        <select className="form-select">
                            <option value="">Seleccionar</option>
                            <option value="">Cédula de Ciudadanía</option>
                            <option value="">Tarjeta de Identidad</option>
                            <option value="">Cédula de Extranjería</option>
                            <option value="">Registro Civil</option>
                            <option value="">Pasaporte</option>
                            <option value="">NIT</option>
                        </select>
                    </div>
                    <div className="form-group mb-3 w-100">
                        <label htmlFor="num_id">Número de identificación</label>
                        <input
                            type="text"
                            className="form-control form-control-lg bg-light fs-6"
                            id="num_id"
                            required
                        />
                    </div>
                    <div className="form-group mb-3 w-100">
                        <label htmlFor="date">Fecha de nacimiento</label>
                        <input
                            type="date"
                            className="form-control form-control-lg bg-light fs-6"
                            id="date"
                            required
                        />
                    </div>
                    <div className="text-center w-100">
                        <Link to="/home" type="submit" className="btn btn-primary w-50">Iniciar Sesión</Link>
                    </div>
                </form>
                <div className="figureStyle d-flex align-items-center justify-content-center" style={{ width: '50%', padding: '35px' }}>
                    <figure>
                        <img
                            src="./assets/close-up-medical-team-ready-work.jpg"
                            alt="Imagen de un equipo médico"
                            className='imgStyle'
                            style={{ maxWidth: '100%', height: 'auto', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Login;
