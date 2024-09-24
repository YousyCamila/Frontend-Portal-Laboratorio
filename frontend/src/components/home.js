import React from 'react';

function Home() {
    return (
        <div className="container" style={{ padding: '0px' }}>
            <h2>Ordenes de laboratorio</h2>
            <div className="filter d-flex flex-column flex-sm-row align-items-center mb-3">
                <div className="form-group me-3 mb-3 mb-sm-0">
                    <label htmlFor="num_orde">Número de orden</label>
                    <input
                        type="text"
                        className="form-control form-control-lg bg-light fs-6"
                        id="num_orde"
                        required
                    />
                </div>
                <div className="form-group me-3">
                    <label htmlFor="date" className="d-block">Rango de fecha:</label>
                    <div className="d-flex align-items-center">
                        <input
                            type="date"
                            className="form-control form-control-lg bg-light fs-6 me-2"
                            id="start_date"
                            required
                        />
                        <span className="me-2">a</span>
                        <input
                            type="date"
                            className="form-control form-control-lg bg-light fs-6"
                            id="end_date"
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
