import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard';

function Orders({ onViewDetail }) {
    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        const fetchOrdenes = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/orden'); // Asegúrate de que la URL sea correcta
                const data = await response.json();
                setOrdenes(data);
            } catch (error) {
                console.error('Error al obtener las órdenes:', error);
            }
        };

        fetchOrdenes();
    }, []);

    return (
        <div style={{ margin: '20px' }}>
            <Dashboard />
            <h2>Órdenes</h2>
            <table className="table table-striped table-hover mt-4">
                <thead>
                    <tr>
                        <th scope="col">Grupo</th>
                        <th scope="col">Procedimientos</th>
                        <th scope="col">Resultados</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenes.map(orden => (
                        <tr key={orden.paciente}>
                            <td>{orden.grupo}</td>
                            <td>{orden.procedimientos.join(', ')}</td> {/* Muestra procedimientos como una lista separada por comas */}
                            <td>
                                {orden.resultados.map((resultado, index) => (
                                    <div key={index}>
                                        {resultado.prueba}: {resultado.resultado}
                                    </div>
                                ))}
                            </td>
                            <td>{orden.paciente}</td>
                            <td style={{ textAlign: 'center' }}>
                                <button className="btn btn-info" onClick={() => onViewDetail(orden)}>
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;
