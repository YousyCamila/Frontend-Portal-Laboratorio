import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
    const recaptchaRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();
        
        if (recaptchaValue) {
            // Enviar el valor al servidor para verificación
            const response = await fetch('/api/verify-recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recaptchaValue }),
            });

            const data = await response.json();
            if (data.success) {
                // Procesar el formulario
                console.log('¡Formulario enviado exitosamente!');
                navigate('/dashboard'); // Redirigir al dashboard
            } else {
                console.error('Error en reCAPTCHA. Intenta nuevamente.');
            }
        } else {
            console.error('Por favor completa el reCAPTCHA.');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 main">
            <div className="d-flex" style={{ width: '100%', maxWidth: '800px' }}>
                <form className="formStyle d-flex flex-column align-items-center" style={{ width: '50%', padding: '35px' }} onSubmit={handleSubmit}>
                    <div className="header-text mb-4 text-center">
                        <h2>Iniciar sesión</h2>
                    </div>
                    <div className="form-group mb-3 w-100">
                        <label htmlFor="type_id">Tipo de identificación:</label>
                        <select className="form-select" id="type_id" required>
                            <option value="">Seleccionar</option>
                            <option value="cedula">Cédula de Ciudadanía</option>
                            <option value="tarjeta">Tarjeta de Identidad</option>
                            <option value="cedula_extranjeria">Cédula de Extranjería</option>
                            <option value="registro_civil">Registro Civil</option>
                            <option value="pasaporte">Pasaporte</option>
                            <option value="nit">NIT</option>
                        </select>
                    </div>
                    <div className="form-group mb-3 w-100">
                        <label htmlFor="num_id">Número de identificación</label>
                        <input
                            type="text"
                            className="form-control form-control-lg fs-6"
                            id="num_id"
                            required
                        />
                    </div>
                    <div className="form-group mb-3 w-100">
                        <label htmlFor="date">Fecha de nacimiento</label>
                        <input
                            type="date"
                            className="form-control form-control-lg fs-6"
                            id="date"
                            required
                        />
                    </div>
                    
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="TU_CLAVE_DEL_SITIO" // Reemplaza esto con tu Site Key
                        size="normal" // Cambia a 'invisible' si quieres que no se muestre
                    />
                    
                    <div className="text-center w-100" style={{ marginTop: '20px' }}>
                        <button type="submit" className="btn btn-primary w-50">Iniciar Sesión</button>
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
