// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Simulación de rol de usuario, puedes cambiar a "doctor" o "nurse"
    const simulatedUserRole = 'doctor';
    setUserRole(simulatedUserRole);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home userRole={userRole} setUserRole={setUserRole} />} />
        {/* Redirige a la página de inicio si no está autenticado o no tiene un rol válido */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
