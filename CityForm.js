import React, { useEffect, useState } from 'react';
import { useAuth0 } from 'auth0-react';

const CityForm = () => {
  const [states, setStates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const data = await fetchDepartments();
        setStates(data);
      } catch (error) {
        setError(error.message);
      }
    };

    loadDepartments();
  }, []);

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <ul>
        {states.map((state) => (
          <li key={state.id}>{state.name}</li>
        ))}
      </ul>
    </div>
  );
};

const fetchDepartments = async () => {
  try {
    const { getAccessTokenSilently } = useAuth0();
    const token = await getAccessTokenSilently();
    const response = await fetch('http://localhost:8080/general/api/v1/states', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener departamentos');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener departamentos:', error);
    throw error;
  }
};

export default CityForm; 