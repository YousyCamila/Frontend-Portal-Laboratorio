// Orders.jsx
import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard';

// Datos estáticos que simulan las órdenes
const mockOrdenes = [
    {
        numeroOrden: "ORD-001",
        grupo: "Hematología",
        procedimientos: ["Hemograma", "Biometría Hemática"],
        resultados: [
            { prueba: "Hemoglobina", resultado: "14.2 g/dL" },
            { prueba: "Leucocitos", resultado: "6500 células/mcL" },
            { prueba: "Plaquetas", resultado: "250000 células/mcL" },
        ],
        paciente: "Juan Pérez",
    },
    {
        numeroOrden: "ORD-002",
        grupo: "Química Sanguínea",
        procedimientos: ["Glucosa", "Creatinina", "Colesterol"],
        resultados: [
            { prueba: "Glucosa", resultado: "90 mg/dL" },
            { prueba: "Creatinina", resultado: "0.9 mg/dL" },
            { prueba: "Colesterol", resultado: "180 mg/dL" },
        ],
        paciente: "María López",
    },
    {
        numeroOrden: "ORD-003",
        grupo: "Inmunología",
        procedimientos: ["Anticuerpos", "Prueba de VIH"],
        resultados: [
            { prueba: "Anticuerpos", resultado: "Negativo" },
            { prueba: "Prueba de VIH", resultado: "Negativo" },
        ],
        paciente: "Carlos Gómez",
    },
    {
        numeroOrden: "ORD-004",
        grupo: "Microbiología",
        procedimientos: ["Cultivo de Sangre", "Antibiograma"],
        resultados: [
            { prueba: "Cultivo de Sangre", resultado: "No Crecimiento" },
            { prueba: "Antibiograma", resultado: "Sensible a Penicilina" },
        ],
        paciente: "Laura Martínez",
    },
    {
        numeroOrden: "ORD-005",
        grupo: "Hormonas",
        procedimientos: ["TSH", "T3", "T4"],
        resultados: [
            { prueba: "TSH", resultado: "2.5 μUI/mL" },
            { prueba: "T3", resultado: "100 ng/dL" },
            { prueba: "T4", resultado: "8.0 μg/dL" },
        ],
        paciente: "Sofía Ramírez",
    },
    {
        numeroOrden: "ORD-006",
        grupo: "Gastroenterología",
        procedimientos: ["H. Pylori", "Prueba de función hepática"],
        resultados: [
            { prueba: "H. Pylori", resultado: "Positivo" },
            { prueba: "Prueba de función hepática", resultado: "Normal" },
        ],
        paciente: "Andrés Fernández",
    },
    {
        numeroOrden: "ORD-007",
        grupo: "Cardiología",
        procedimientos: ["Electrocardiograma", "Ecocardiograma"],
        resultados: [
            { prueba: "Electrocardiograma", resultado: "Normal" },
            { prueba: "Ecocardiograma", resultado: "Función normal" },
        ],
        paciente: "Elena Díaz",
    },
    {
        numeroOrden: "ORD-008",
        grupo: "Oftalmología",
        procedimientos: ["Examen de Vista", "Tonometría"],
        resultados: [
            { prueba: "Examen de Vista", resultado: "20/20" },
            { prueba: "Tonometría", resultado: "Normal" },
        ],
        paciente: "Miguel Torres",
    },
    {
        numeroOrden: "ORD-009",
        grupo: "Endocrinología",
        procedimientos: ["Insulina", "Cortisol"],
        resultados: [
            { prueba: "Insulina", resultado: "6 μUI/mL" },
            { prueba: "Cortisol", resultado: "15 μg/dL" },
        ],
        paciente: "Patricia Jiménez",
    },
    {
        numeroOrden: "ORD-010",
        grupo: "Neurología",
        procedimientos: ["Electroencefalograma", "Resonancia Magnética"],
        resultados: [
            { prueba: "Electroencefalograma", resultado: "Sin anormalidades" },
            { prueba: "Resonancia Magnética", resultado: "Normal" },
        ],
        paciente: "Jorge Morales",
    },
];


function Orders({ onViewDetail }) {
    const [ordenes, setOrdenes] = useState([]);
    const [filtroNumeroOrden, setFiltroNumeroOrden] = useState('');

    useEffect(() => {
        setOrdenes(mockOrdenes);
    }, []);

    const ordenesFiltradas = ordenes.filter(orden =>
        orden.numeroOrden.includes(filtroNumeroOrden)
    );

    return (
        <div style={{ margin: '20px' }}>
            <Dashboard />
            <h2>Órdenes</h2>

            <div className="form-group mb-3">
                <label htmlFor="numeroOrden">Filtrar por Número de Orden:</label>
                <input
                    type="text"
                    id="numeroOrden"
                    className="form-control"
                    placeholder="Ingrese número de orden"
                    value={filtroNumeroOrden}
                    onChange={(e) => setFiltroNumeroOrden(e.target.value)}
                />
            </div>

            <table className="table table-striped table-hover mt-4">
                <thead>
                    <tr>
                        <th scope="col">Número de Orden</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Procedimientos</th>
                        <th scope="col">Resultados</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenesFiltradas.map(orden => (
                        <tr key={orden.numeroOrden}>
                            <td>{orden.numeroOrden}</td>
                            <td>{orden.grupo}</td>
                            <td>{orden.procedimientos.join(', ')}</td>
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
