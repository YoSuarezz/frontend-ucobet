import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); // Hook de Auth0 para manejar el inicio de sesión

  return (
    <button onClick={loginWithRedirect}>
      Iniciar Sesión
    </button>
  );
};

export default LoginButton;
