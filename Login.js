const handleLogin = async (credentials) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error('Error en login');
    }

    const data = await response.json();
    // Verificar que el token se está guardando correctamente
    console.log('Respuesta del login:', data);
    
    // Guardar el token
    localStorage.setItem('token', data.token);
    // o si viene en otro formato:
    // localStorage.setItem('token', data.access_token);
  } catch (error) {
    console.error('Error en login:', error);
  }
}; 