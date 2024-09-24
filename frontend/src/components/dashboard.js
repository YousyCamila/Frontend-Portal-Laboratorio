import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Orders from './orders';
import Detail from './detail';
import Profile from './profile';

function Dashboard() {
    const usuario = {
        name: "Juan Pérez",
        image: "https://via.placeholder.com/40",
    };

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [viewingDetail, setViewingDetail] = useState(false);
    const [viewingProfile, setViewingProfile] = useState(false);


    const handleLogout = () => {
        alert('Cerrando sesión...');
    };

    const handleViewDetail = (order) => {
        setSelectedOrder(order);
        setViewingDetail(true);
    };

    const handleBack = () => {
        setViewingDetail(false);
        setSelectedOrder(null);
    };

    const handleViewProfile = () => {
        setViewingProfile(true);
    };


    return (
        <div className="d-flex">
            <div className="sidebar bg-light border-end" style={{ width: '250px', height: '100vh', padding: '25px' }}>
                <ul className="nav flex-column">
                    <Link to="/home" className="nav-item">
                        <a className="nav-link" href="/home">
                            <i className="bi bi-house"></i> Home
                        </a>
                    </Link>
                    <li className="nav-item" onClick={handleViewProfile}>
                        <a className="nav-link" href="#!">
                            <i className="bi bi-person-circle"></i> Perfil de usuario
                        </a>
                    </li>

                </ul>
            </div>

            <div className="flex-grow-1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ margin: '20px' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/home">Portal Laboratorio Clinico</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto"></ul>
                            <div className="d-flex align-items-center">
                                <img src={usuario.image} alt="Usuario" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                <span className="me-3">{usuario.name}</span>
                                <button className="btn btn-outline-danger" onClick={handleLogout}>Cerrar Sesión</button>
                            </div>
                        </div>
                    </div>
                </nav>

                {viewingProfile ? (
                    <Profile />
                ) : viewingDetail ? (
                    <Detail order={selectedOrder} onBack={handleBack} />
                ) : (
                    <Orders onViewDetail={handleViewDetail} />
                )}

            </div>
        </div>
    );
}

export default Dashboard;
