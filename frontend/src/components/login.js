import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tipoIdentificacion, numeroIdentificacion, fechaNacimiento, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                alert('Inicio de sesión exitoso');
                navigate('/dashboard');
            } else {
                const errorMessage = await response.text();
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <form style={{ width: '80%', maxWidth: '400px' }} onSubmit={handleLogin}>
                <div className="header-text mb-4 text-center">
                    <h2>Iniciar Sesión</h2>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="tipoIdentificacion">Tipo de Identificación</label>
                    <select
                        className="form-control"
                        id="tipoIdentificacion"
                        value={tipoIdentificacion}
                        onChange={(e) => setTipoIdentificacion(e.target.value)}
                        required
                    >
                        <option value="">Seleccionar</option>
                        <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                        <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="numeroIdentificacion">Número de Identificación</label>
                    <input
                        type="text"
                        className="form-control"
                        id="numeroIdentificacion"
                        placeholder="Número de Identificación"
                        value={numeroIdentificacion}
                        onChange={(e) => setNumeroIdentificacion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                    <input
                        type="date"
                        className="form-control"
                        id="fechaNacimiento"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                <div className="row mt-3">
                    <small>
                        ¿No tiene una cuenta? 
                        <button
                            className="btn btn-link"
                            onClick={() => navigate('/register')}
                        >
                            Registrarse
                        </button>
                    </small>
                </div>
            </form>
        </div>
    );
}

export default Login;
