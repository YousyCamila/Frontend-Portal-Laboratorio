import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Detail({ order, onBack }) {
    const prueba = {
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
    };
    
    return (
        <div className="container styleDetail" style={{ overflow: 'hidden', padding: '0 20px' }}>
            <h2 className="mb-4">Nombre del grupo Hematología</h2>
            <h3>{prueba.nombre}</h3>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Detalles del Paciente</h5>
                    
                    <div className="row">
                        <div className="col">
                            <p><strong>Paciente:</strong> <br/> Juan Pérez</p>
                        </div>
                        <div className="col">
                            <p><strong>Identificación:</strong> <br/> 123456789</p>
                        </div>
                        <div className="col">
                            <p><strong>Sexo:</strong> <br/> Masculino</p>
                        </div>
                        <div className="col">
                            <p><strong>Edad:</strong> <br/> 30</p>
                        </div>
                        <div className="col">
                            <p><strong>EPS:</strong> <br/> EPS Salud</p>
                        </div>
                        <div className="col">
                            <p><strong>Teléfono:</strong> <br/> 300-123-4567</p>
                        </div>
                        <div className="col">
                            <p><strong>Médico:</strong> <br/> Dr. Ana Torres</p>
                        </div>
                        <div className="col">
                            <p><strong>Fecha:</strong> <br/> {order.fecha}</p>
                        </div>
                    </div>
                    
                    <button className="btn btn-secondary mt-3" onClick={onBack}>Volver</button>
                </div>
            </div>

            <div>
                <h5 className="mt-4">Resultados de la Prueba</h5>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Detail;
