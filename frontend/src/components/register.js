import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const RegistroUsuario = () => {
    const navigate = useNavigate(); // Inicializa useNavigate
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

            setMessage('Registro guardado con éxito'); // Mensaje de éxito
            setError(''); // Limpiar errores

            // Resetea el formulario
            setFormData({
                tipoIdentificacion: '',
                numeroIdentificacion: '',
                fechaNacimiento: '',
                password: '',
                rol: ''
            });

            // Redirecciona a StepTwo
            navigate('/login'); // Redirige a StepTwo
        } catch (error) {
            setError(error.message); // Mensaje de error
            setMessage(''); // Limpiar mensaje de éxito
            console.error(error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Registro de Usuario</h2>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="tipoIdentificacion">Tipo de Identificación</label>
                    <select
                        id="tipoIdentificacion"
                        name="tipoIdentificacion"
                        className="form-control"
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
                <div className="form-group mb-3">
                    <label htmlFor="numeroIdentificacion">Número de Identificación</label>
                    <input
                        type="text"
                        id="numeroIdentificacion"
                        name="numeroIdentificacion"
                        className="form-control"
                        value={formData.numeroIdentificacion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
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
                <div className="form-group mb-3">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="rol">Rol</label>
                    <select
                        id="rol"
                        name="rol"
                        className="form-control"
                        value={formData.rol}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccionar</option>
                        <option value="paciente">Paciente</option>
                        <option value="profesional">Profesional</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    );
};

export default RegistroUsuario;
