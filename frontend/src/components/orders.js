import React from 'react';
import Home from './home'

function Orders({ onViewDetail }) {
    const ordenes = [{
        fecha: "2024-09-24",
        documento: "ORD-123456",
        numero: "001"
    }];

    return (
        <div style={{ margin: '20px' }}>
            <Home/>
            <h2>Ordenes</h2>
            <table className="table mt-4">
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
                            <td>
                                <button className="btn btn-info" onClick={() => onViewDetail(orden)}><i class="fa-solid fa-eye" style={{ margin: '0 10px 0 0' }}></i>Ver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;
