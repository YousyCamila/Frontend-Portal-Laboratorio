import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroUsuario = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tipoIdentificacion: '',
        numeroIdentificacion: '',
        fechaNacimiento: '',
        password: '',
        rol: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al registrar el usuario');
            }

            setMessage('Registro guardado con éxito');
            setError('');

            setFormData({
                tipoIdentificacion: '',
                numeroIdentificacion: '',
                fechaNacimiento: '',
                password: '',
                rol: ''
            });

            navigate('/login');
        } catch (error) {
            setError(error.message);
            setMessage('');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '30rem' }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Registro de Usuario</h3>
                    
                    {/* Mostrar mensajes de éxito o error */}
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        {/* Tipo de Identificación */}
                        <div className="form-group mb-3">
                            <label htmlFor="tipoIdentificacion" className="form-label">Tipo de Identificación</label>
                            <select
                                id="tipoIdentificacion"
                                name="tipoIdentificacion"
                                className="form-select"
                                value={formData.tipoIdentificacion}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </select>
                        </div>

                        {/* Número de Identificación */}
                        <div className="form-group mb-3">
                            <label htmlFor="numeroIdentificacion" className="form-label">Número de Identificación</label>
                            <input
                                type="text"
                                id="numeroIdentificacion"
                                name="numeroIdentificacion"
                                className="form-control"
                                placeholder="Número de Identificación"
                                value={formData.numeroIdentificacion}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Fecha de Nacimiento */}
                        <div className="form-group mb-3">
                            <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                            <input
                                type="date"
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                className="form-control"
                                value={formData.fechaNacimiento}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Contraseña */}
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Rol */}
                        <div className="form-group mb-4">
                            <label htmlFor="rol" className="form-label">Rol</label>
                            <select
                                id="rol"
                                name="rol"
                                className="form-select"
                                value={formData.rol}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="Paciente">Paciente</option>
                                <option value="Profesional">Profesional</option>
                            </select>
                        </div>

                        {/* Botón de enviar */}
                        <button type="submit" className="btn btn-primary w-100 mb-3">Registrar</button>

                        {/* Link de redirección al login */}
                        <div className="text-center">
                            <small>
                                ¿Ya tienes una cuenta?{' '}
                                <button
                                    className="btn btn-link p-0"
                                    style={{ textDecoration: 'none' }}
                                    onClick={() => navigate('/login')}
                                >
                                    Iniciar sesión
                                </button>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistroUsuario;
