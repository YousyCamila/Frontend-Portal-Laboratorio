import React from 'react';
import Dashboard from './dashboard';

function Orders({ onViewDetail }) {
    const ordenes = [
    {
        fecha: "2024-09-24",
        documento: "ORD-123456",
        numero: "001"
    },
    {
        fecha: "2024-09-24",
        documento: "ORD-123456",
        numero: "001"
    },
    {
        fecha: "2024-09-24",
        documento: "ORD-123456",
        numero: "001"
    }
];

    return (
        <div style={{ margin: '20px' }}>
            <Dashboard />
            <h2>Ordenes</h2>
            <table className="table table-striped table-hover mt-4">
                <thead>
                    <tr>
                        <th scope="col">Fecha de la orden</th>
                        <th scope="col">Documento de la orden</th>
                        <th scope="col">Número de la orden</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenes.map(orden => (
                        <tr key={orden.numero}>
                            <td>{orden.fecha}</td>
                            <td>{orden.documento}</td>
                            <td>{orden.numero}</td>
                            <td style={{ textAlign: 'center' }}>
                                <button className="btn btn-info" onClick={() => onViewDetail(orden)}><i class="fa-solid fa-eye"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;
