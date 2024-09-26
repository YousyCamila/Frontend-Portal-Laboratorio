import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Orders from './components/orders';
import Detail from './components/detail';
import Home from './components/home';
import StepTwo from './components/stepTwo'; // Importa el nuevo componente
import { UserProvider } from './components/userContext';

function App() {
    return (
        <UserProvider>
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/"
                                element={
                                    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
                                        <h1 className="mb-4 text-center text-primary">Bienvenido a Portal Laboratorio Clinico</h1>
                                        <Link to='/login'
                                            className="btn btn-primary btn-lg w-50"
                                        >
                                            Ir al Login
                                        </Link>
                                    </div>
                                } />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/stepTwo" element={<StepTwo />} /> {/* Añade esta línea */}
                            <Route path="/dashboard" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/detail" element={<Detail />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </UserProvider>
    );
}

export default App;
