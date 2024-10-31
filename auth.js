const getToken = async () => {
  try {
    const { getAccessTokenSilently } = useAuth0();
    
    const token = await getAccessTokenSilently({
      authorizationParams: {
        audience: "https://dev-g3qtue2ymqd1uqxf.us.auth0.com/api/v2/",
        scope: "openid profile email"
      }
    });

    return token;
  } catch (error) {
    console.error('Error al obtener token:', error);
    throw error;
  }
}; 