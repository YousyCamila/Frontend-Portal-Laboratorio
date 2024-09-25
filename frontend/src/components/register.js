import React, { useState } from 'react';

const FormularioPaciente = ({ userData, onSubmit }) => {
    const [informacionAdicional, setInformacionAdicional] = useState({
        apellido1: '',
        apellido2: '',
        nombre1: '',
        nombre2: '',
        sexoBiologico: '',
        direccion: '',
        telefonoMovil: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({ ...userData, ...informacionAdicional, rol: 'paciente' });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
            <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '800px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="text-center mb-4">Formulario Paciente</h2>
                <p>Tipo de identificación: {userData.tipoIdentificacion}</p>
                <p>Número de identificación: {userData.numeroIdentificacion}</p>
                <p>Fecha de nacimiento: {new Date(userData.fechaNacimiento).toLocaleDateString()}</p>
                
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Apellido 1" value={informacionAdicional.apellido1} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, apellido1: e.target.value })} required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Apellido 2" value={informacionAdicional.apellido2} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, apellido2: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre 1" value={informacionAdicional.nombre1} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, nombre1: e.target.value })} required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre 2" value={informacionAdicional.nombre2} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, nombre2: e.target.value })} />
                    </div>
                </div>
                <div className="form-group mb-3">
                    <select className="form-control" value={informacionAdicional.sexoBiologico} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, sexoBiologico: e.target.value })} required>
                        <option value="">Seleccionar Sexo Biológico</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Dirección" value={informacionAdicional.direccion} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, direccion: e.target.value })} required />
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Teléfono Móvil" value={informacionAdicional.telefonoMovil} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, telefonoMovil: e.target.value })} required />
                </div>
                <div className="form-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" value={informacionAdicional.email} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, email: e.target.value })} required />
                </div>
                <div className="form-group mb-3">
                    <input type="password" className="form-control" placeholder="Contraseña" value={informacionAdicional.contraseña} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, contraseña: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrar Paciente</button>
            </form>
        </div>
    );
};

const FormularioProfesional = ({ userData, onSubmit }) => {
    const [informacionAdicional, setInformacionAdicional] = useState({
        apellido1: '',
        apellido2: '',
        nombre1: '',
        nombre2: '',
        sexoBiologico: '',
        direccion: '',
        telefonoMovil: '',
        email: '',
        especialidad: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({ ...userData, ...informacionAdicional, rol: 'profesional' });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
            <form onSubmit={handleSubmit} style={{ width: '80%', maxWidth: '800px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="text-center mb-4">Formulario Profesional</h2>
                <p>Tipo de identificación: {userData.tipoIdentificacion}</p>
                <p>Número de identificación: {userData.numeroIdentificacion}</p>
                <p>Fecha de nacimiento: {new Date(userData.fechaNacimiento).toLocaleDateString()}</p>
                
                <input type="text" className="form-control mb-3" placeholder="Apellido 1" value={informacionAdicional.apellido1} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, apellido1: e.target.value })} required />
                <input type="text" className="form-control mb-3" placeholder="Apellido 2" value={informacionAdicional.apellido2} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, apellido2: e.target.value })} />
                <input type="text" className="form-control mb-3" placeholder="Nombre 1" value={informacionAdicional.nombre1} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, nombre1: e.target.value })} required />
                <input type="text" className="form-control mb-3" placeholder="Nombre 2" value={informacionAdicional.nombre2} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, nombre2: e.target.value })} />
                <select className="form-control mb-3" value={informacionAdicional.sexoBiologico} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, sexoBiologico: e.target.value })} required>
                    <option value="">Seleccionar Sexo Biológico</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                <input type="text" className="form-control mb-3" placeholder="Dirección" value={informacionAdicional.direccion} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, direccion: e.target.value })} required />
                <input type="text" className="form-control mb-3" placeholder="Teléfono Móvil" value={informacionAdicional.telefonoMovil} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, telefonoMovil: e.target.value })} required />
                <input type="email" className="form-control mb-3" placeholder="Email" value={informacionAdicional.email} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, email: e.target.value })} required />
                <input type="text" className="form-control mb-3" placeholder="Especialidad" value={informacionAdicional.especialidad} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, especialidad: e.target.value })} required />
                <input type="password" className="form-control mb-3" placeholder="Contraseña" value={informacionAdicional.contraseña} onChange={(e) => setInformacionAdicional({ ...informacionAdicional, contraseña: e.target.value })} required />
                <button type="submit" className="btn btn-primary w-100">Registrar Profesional</button>
            </form>
        </div>
    );
};

const Registro = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        tipoIdentificacion: '',
        numeroIdentificacion: '',
        fechaNacimiento: '',
        contraseña: '',
    });

    const handleNextStep = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tipoIdentificacion: data.tipoIdentificacion,
                    numeroIdentificacion: data.numeroIdentificacion,
                    fechaNacimiento: new Date(data.fechaNacimiento).toISOString(),
                    password: data.contraseña, // Cambiado a 'password'
                }),
            });
    
            if (!response.ok) {
                throw new Error('Error al registrar el usuario.');
            }
    
            setUserData(data);
            setStep(2);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };
    

    const handleFinalSubmit = async (data) => {
        console.log('Datos a enviar:', data);
        try {
            const endpoint = data.rol === 'paciente' ? 'http://localhost:3000/api/paciente' : 'http://localhost:3000/api/profesional';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Registro exitoso');
                // Opcional: reiniciar el formulario o redirigir
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error || 'No se pudo completar el registro.'}`);
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Hubo un error al enviar los datos.');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center bg-light height-bg">
            {step === 1 && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleNextStep({
                        tipoIdentificacion: e.target.tipoIdentificacion.value,
                        numeroIdentificacion: e.target.numeroIdentificacion.value,
                        fechaNacimiento: e.target.fechaNacimiento.value,
                        password: e.target.contraseña.value,
                    });
                }}>
                    <h2>Registro Inicial</h2>
                    <div className="form-group mb-3">
                        <label htmlFor="tipoIdentificacion">Tipo de Identificación</label>
                        <select className="form-control" id="tipoIdentificacion" required>
                            <option value="">Seleccionar tipo de identificación</option>
                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="numeroIdentificacion">Número de Identificación</label>
                        <input type="text" className="form-control" id="numeroIdentificacion" placeholder="Número de identificación" required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                        <input type="date" className="form-control" id="fechaNacimiento" required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Siguiente</button>
                </form>
            )}
            {step === 2 && (
                <div style={{ backgroundImage: 'url(your-background-image-url.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                    <div className="card" style={{ width: '400px', margin: 'auto', marginTop: '100px', opacity: 0.9 }}>
                        <div className="card-body text-center">
                            <h2 className="text-center mb-4">Seleccionar Rol</h2>
                            <div className="d-flex flex-column align-items-center">
                                <button className="btn btn-primary w-75 mb-2" onClick={() => setStep(3)}>
                                    Registrar como Paciente
                                </button>
                                <button className="btn btn-outline-secondary w-75" onClick={() => setStep(4)}>
                                    Registrar como Profesional
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {step === 3 && (
                <FormularioPaciente userData={userData} onSubmit={handleFinalSubmit} />
            )}
            {step === 4 && (
                <FormularioProfesional userData={userData} onSubmit={handleFinalSubmit} />
            )}
        </div>
    );
};

export default Registro;
