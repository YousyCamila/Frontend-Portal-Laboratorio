import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Detail({ onBack }) {
    // Datos del paciente estáticos
    const paciente = {
        nombre: "Juan Pérez",
        identificacion: "123456789",
        sexo: "Masculino",
        edad: 30,
        eps: "EPS Salud",
        telefono: "300-123-4567",
        medico: "Dr. Ana Torres",
        fecha: "2024-09-25", // Puedes cambiar esta fecha según sea necesario
    };

    // Datos de pruebas estáticas
    const pruebas = [
        {
            codigo: "PRUEBA-001",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 14.5,
                leucocitos: 6500,
                plaquetas: 200000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-002",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 13.8,
                leucocitos: 7200,
                plaquetas: 180000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-003",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 15.2,
                leucocitos: 8900,
                plaquetas: 220000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-004",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 12.5,
                leucocitos: 7100,
                plaquetas: 210000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-005",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 14.0,
                leucocitos: 6400,
                plaquetas: 250000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-006",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 15.5,
                leucocitos: 5000,
                plaquetas: 260000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-007",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 11.8,
                leucocitos: 8200,
                plaquetas: 190000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-008",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 16.0,
                leucocitos: 7800,
                plaquetas: 230000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-009",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 14.2,
                leucocitos: 9500,
                plaquetas: 220000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        },
        {
            codigo: "PRUEBA-010",
            nombre: "Hemograma Completo",
            resultado: {
                hemoglobina: 13.3,
                leucocitos: 6800,
                plaquetas: 200000
            },
            valoresReferencia: {
                hemoglobina: {
                    min: 13.0,
                    max: 17.0,
                    unidad: "g/dL"
                },
                leucocitos: {
                    min: 4000,
                    max: 10000,
                    unidad: "células/mcL"
                },
                plaquetas: {
                    min: 150000,
                    max: 450000,
                    unidad: "células/mcL"
                }
            }
        }
    ];

    return (
        <div className="container styleDetail" style={{ overflow: 'hidden', padding: '0 20px' }}>
            <h2 className="mb-4">Nombre del grupo Hematología</h2>
            <h3>Resultados de Hemograma Completo</h3>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Detalles del Paciente</h5>
                    
                    <div className="row">
                        <div className="col">
                            <p><strong>Paciente:</strong> <br/> {paciente.nombre}</p>
                        </div>
                        <div className="col">
                            <p><strong>Identificación:</strong> <br/> {paciente.identificacion}</p>
                        </div>
                        <div className="col">
                            <p><strong>Sexo:</strong> <br/> {paciente.sexo}</p>
                        </div>
                        <div className="col">
                            <p><strong>Edad:</strong> <br/> {paciente.edad}</p>
                        </div>
                        <div className="col">
                            <p><strong>EPS:</strong> <br/> {paciente.eps}</p>
                        </div>
                        <div className="col">
                            <p><strong>Teléfono:</strong> <br/> {paciente.telefono}</p>
                        </div>
                        <div className="col">
                            <p><strong>Médico:</strong> <br/> {paciente.medico}</p>
                        </div>
                        <div className="col">
                            <p><strong>Fecha:</strong> <br/> {paciente.fecha}</p>
                        </div>
                    </div>
                    
                    <button className="btn btn-secondary mt-3" onClick={onBack}>Volver</button>
                </div>
            </div>

            <div>
                <h5 className="mt-4">Resultados de las Pruebas</h5>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Código de la Prueba</th>
                            <th scope="col">Nombre de la Prueba</th>
                            <th scope="col">Resultado</th>
                            <th scope="col">Valores de Referencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pruebas.map((prueba) => (
                            <tr key={prueba.codigo}>
                                <td>{prueba.codigo}</td>
                                <td>{prueba.nombre}</td>
                                <td>
                                    Hemoglobina: {prueba.resultado.hemoglobina} g/dL<br />
                                    Leucocitos: {prueba.resultado.leucocitos} células/mcL<br />
                                    Plaquetas: {prueba.resultado.plaquetas} células/mcL
                                </td>
                                <td>
                                    Hemoglobina: {prueba.valoresReferencia.hemoglobina.min} - {prueba.valoresReferencia.hemoglobina.max} {prueba.valoresReferencia.hemoglobina.unidad}<br />
                                    Leucocitos: {prueba.valoresReferencia.leucocitos.min} - {prueba.valoresReferencia.leucocitos.max} {prueba.valoresReferencia.leucocitos.unidad}<br />
                                    Plaquetas: {prueba.valoresReferencia.plaquetas.min} - {prueba.valoresReferencia.plaquetas.max} {prueba.valoresReferencia.plaquetas.unidad}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Detail;
