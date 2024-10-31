import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const TokenDebugger = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const verifyToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          console.group('Token Verification');
          console.log('Token exists:', !!token);
          console.log('Token length:', token.length);
          console.log('Token preview:', token.substring(0, 50) + '...');
          
          // Decodificar el token (solo para desarrollo)
          const [header, payload] = token.split('.').slice(0, 2)
            .map(part => JSON.parse(atob(part)));
          
          console.log('Token header:', header);
          console.log('Token payload:', payload);
          console.log('Token expiration:', new Date(payload.exp * 1000).toLocaleString());
          console.groupEnd();
        } catch (error) {
          console.error('Error al verificar token:', error);
        }
      }
    };

    verifyToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return null; // Este componente no renderiza nada
};

export default TokenDebugger; 