import React, { useState } from 'react';

const CompleteProfile = ({ initialRol }) => {
    const [informacionPaciente, setInformacionPaciente] = useState({
        apellido1: '',
        apellido2: '',
        nombre1: '',
        nombre2: '',
        sexoBiologico: '',
        direccion: '',
        telefonoMovil: '',
        email: '',
    });

    const [informacionProfesional, setInformacionProfesional] = useState({
        apellido1: '',
        apellido2: '',
        nombre1: '',
        nombre2: '',
        sexoBiologico: '',
        direccion: '',
        telefonoMovil: '',
        email: '',
        especialidad: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = initialRol === 'paciente' ? 'http://localhost:3000/api/paciente' : 'http://localhost:3000/api/profesional';
        const data = initialRol === 'paciente' ? { ...informacionPaciente } : { ...informacionProfesional };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error al registrar');
            }

            alert(`Registro de ${initialRol} exitoso`);
            // Resetear formularios o redirigir según sea necesario
            resetForm();
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('Error al registrar, intenta nuevamente');
        }
    };

    const resetForm = () => {
        if (initialRol === 'paciente') {
            setInformacionPaciente({
                apellido1: '',
                apellido2: '',
                nombre1: '',
                nombre2: '',
                sexoBiologico: '',
                direccion: '',
                telefonoMovil: '',
                email: '',
            });
        } else {
            setInformacionProfesional({
                apellido1: '',
                apellido2: '',
                nombre1: '',
                nombre2: '',
                sexoBiologico: '',
                direccion: '',
                telefonoMovil: '',
                email: '',
                especialidad: '',
            });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '80%',
                    maxWidth: '800px',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 className="text-center mb-4">Registro</h2>

                <div className="mb-3">
                    <label className="form-label">Rol:</label>
                    <p className="form-control-plaintext">{initialRol}</p>
                </div>

                {initialRol === 'paciente' ? (
                    <>
                        <h4>Formulario Paciente</h4>
                        <InputField
                            label="Apellido 1"
                            value={informacionPaciente.apellido1}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, apellido1: value })}
                            required
                        />
                        <InputField
                            label="Apellido 2"
                            value={informacionPaciente.apellido2}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, apellido2: value })}
                        />
                        <InputField
                            label="Nombre 1"
                            value={informacionPaciente.nombre1}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, nombre1: value })}
                            required
                        />
                        <InputField
                            label="Nombre 2"
                            value={informacionPaciente.nombre2}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, nombre2: value })}
                        />
                        <SelectField
                            label="Sexo Biológico"
                            value={informacionPaciente.sexoBiologico}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, sexoBiologico: value })}
                            options={['masculino', 'femenino']}
                            required
                        />
                        <InputField
                            label="Dirección"
                            value={informacionPaciente.direccion}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, direccion: value })}
                            required
                        />
                        <InputField
                            label="Teléfono Móvil"
                            value={informacionPaciente.telefonoMovil}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, telefonoMovil: value })}
                            required
                        />
                        <InputField
                            label="Email"
                            type="email"
                            value={informacionPaciente.email}
                            onChange={(value) => setInformacionPaciente({ ...informacionPaciente, email: value })}
                            required
                        />
                    </>
                ) : (
                    <>
                        <h4>Formulario Profesional</h4>
                        <InputField
                            label="Apellido 1"
                            value={informacionProfesional.apellido1}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, apellido1: value })}
                            required
                        />
                        <InputField
                            label="Apellido 2"
                            value={informacionProfesional.apellido2}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, apellido2: value })}
                        />
                        <InputField
                            label="Nombre 1"
                            value={informacionProfesional.nombre1}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, nombre1: value })}
                            required
                        />
                        <InputField
                            label="Nombre 2"
                            value={informacionProfesional.nombre2}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, nombre2: value })}
                        />
                        <SelectField
                            label="Sexo Biológico"
                            value={informacionProfesional.sexoBiologico}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, sexoBiologico: value })}
                            options={['masculino', 'femenino']}
                            required
                        />
                        <InputField
                            label="Dirección"
                            value={informacionProfesional.direccion}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, direccion: value })}
                            required
                        />
                        <InputField
                            label="Teléfono Móvil"
                            value={informacionProfesional.telefonoMovil}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, telefonoMovil: value })}
                            required
                        />
                        <InputField
                            label="Email"
                            type="email"
                            value={informacionProfesional.email}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, email: value })}
                            required
                        />
                        <InputField
                            label="Especialidad"
                            value={informacionProfesional.especialidad}
                            onChange={(value) => setInformacionProfesional({ ...informacionProfesional, especialidad: value })}
                            required
                        />
                    </>
                )}

                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    );
};

// Componente reutilizable para campos de entrada
const InputField = ({ label, type = 'text', value, onChange, required }) => (
    <div className="mb-3">
        <label className="form-label">{label}{required && ' *'}</label>
        <input
            type={type}
            className="form-control"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
        />
    </div>
);

// Componente reutilizable para campos de selección
const SelectField = ({ label, value, onChange, options, required }) => (
    <div className="mb-3">
        <label className="form-label">{label}{required && ' *'}</label>
        <select className="form-control" value={value} onChange={(e) => onChange(e.target.value)} required={required}>
            <option value="">Selecciona una opción</option>
            {options.map((option) => (
                <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
            ))}
        </select>
    </div>
);

export default CompleteProfile;
