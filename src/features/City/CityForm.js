import React, { useState, useEffect } from 'react';

const CityForm = () => {
  const [cityName, setCityName] = useState('');
  const [department, setDepartment] = useState('');
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Iniciando fetch de departamentos...');
        const response = await fetch('http://localhost:8080/general/api/v1/states', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Agrega aquí otros headers si son necesarios
          }
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Datos recibidos:', data);
        
        const sortedDepartments = data.sort((a, b) => a.name.localeCompare(b.name));
        setDepartments(sortedDepartments);
      } catch (error) {
        console.error('Error al obtener departamentos:', error);
        setError('Error al cargar los departamentos. Por favor, intenta de nuevo.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      console.log('Enviando datos:', { cityName: cityName, stateId: department });
      
      const response = await fetch('http://localhost:8080/general/api/v1/cities/crearciudad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cityName: cityName,
          stateId: department
        })
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log('Ciudad creada exitosamente:', data);
      
      // Limpiar el formulario después de un envío exitoso
      setCityName('');
      setDepartment('');
      alert('Ciudad registrada exitosamente');
      
    } catch (error) {
      console.error('Error al registrar la ciudad:', error);
      setSubmitError('Error al registrar la ciudad. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="city-form">
      <label htmlFor="department">Departamento:</label>
      <select
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      >
        <option value="">Selecciona un departamento</option>
        {departments.map((dept) => (
          <option key={dept.id} value={dept.id}>
            {dept.name}
          </option>
        ))}
      </select>

      <label htmlFor="cityName">Nombre de la Ciudad:</label>
      <input
        type="text"
        id="cityName"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        required
        disabled={isSubmitting}
      />

      {submitError && (
        <p style={{ color: 'red' }}>{submitError}</p>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting || isLoading}
      >
        {isSubmitting ? 'Registrando...' : 'Registrar Ciudad'}
      </button>
    </form>
  );
};

export default CityForm;
