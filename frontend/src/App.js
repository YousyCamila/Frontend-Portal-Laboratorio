import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import Profile from './components/profile'
import Orders from './components/orders'
import Detail from './components/detail'
import Home from './components/home';


function App() {
  return (
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
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
