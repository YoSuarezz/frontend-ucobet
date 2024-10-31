import { getAccessTokenSilently } from '@auth0/auth0-react';

const API_URL = 'http://localhost:8080';

export const apiService = {
  async fetch(endpoint, options = {}) {
    try {
      // Obtener el token
      const token = await getAccessTokenSilently();
      console.log('Token usado en la petición:', token.substring(0, 20) + '...');

      // Configurar headers
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers
      };

      // Hacer la petición
      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
      });

      // Log para debugging
      console.log('Request details:', {
        url: `${API_URL}${endpoint}`,
        method: options.method || 'GET',
        headers: headers
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
}; 