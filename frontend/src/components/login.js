import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tipoIdentificacion, numeroIdentificacion, fechaNacimiento, password, rol }),
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
            <div className="row w-75" style={{ justifyContent: 'center'}}> {/* Reducción del tamaño de la fila */}
                <div className="col-lg-5 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <div className="card shadow-sm rounded" style={{ width: '20rem' }}> {/* Tamaño reducido del formulario */}
                        <div className="card-body">
                            <form className="w-100" onSubmit={handleLogin}>
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold">Iniciar Sesión</h2>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rol" className="form-label">Rol</label>
                                    <select
                                        className="form-select"
                                        id="rol"
                                        value={rol}
                                        onChange={(e) => setRol(e.target.value)}
                                        required
                                    >
                                        <option value="">Seleccionar rol</option>
                                        <option value="Paciente">Paciente</option>
                                        <option value="Profesional">Profesional</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tipoIdentificacion" className="form-label">Tipo de Identificación</label>
                                    <select
                                        className="form-select"
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
                                <div className="mb-3">
                                    <label htmlFor="numeroIdentificacion" className="form-label">Número de Identificación</label>
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
                                <div className="mb-3">
                                    <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaNacimiento"
                                        value={fechaNacimiento}
                                        onChange={(e) => setFechaNacimiento(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
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
                                <div className="text-center mt-3">
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
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 d-flex justify-content-center">
                    <div className="shadow-sm rounded overflow-hidden" style={{ width: '100%' }}> {/* Ajuste para mantener proporcionalidad */}
                        <img
                            src="/assets/close-up-medical-team-ready-work.jpg"
                            className="img-fluid shadow-sm rounded"
                            alt="Descripción de la imagen"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // Reducción del tamaño de la imagen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
