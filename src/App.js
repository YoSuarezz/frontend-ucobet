import React, { useState } from 'react';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CityForm from './features/City/CityForm';
import LoginButton from './components/LoginButton'; // Importa el nuevo componente
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p>Gestiona tus apuestas de manera sencilla.</p>
        {!isAuthenticated ? (
          <LoginButton /> // Usa el nuevo componente de inicio de sesión
        ) : (
          <>
            <button onClick={toggleForm}>
              {showForm ? 'Ocultar Formulario' : 'Registrar Ciudad'}
            </button>
            {showForm && <CityForm />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
