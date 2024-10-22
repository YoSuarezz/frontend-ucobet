import React, { useState } from 'react';

const CityForm = () => {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Ciudad registrada:', cityName, department, country);
    setCityName('');
    setCountry('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">País:</label>
      <select
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option value="">Selecciona un país</option>
        {/* Aquí se agregarán los países desde la base de datos */}
      </select>

      <label htmlFor="department">Departamento:</label>
      <select
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      >
        <option value="">Selecciona un departamento</option>
        {/* Aquí se agregarán los departamentos desde la base de datos */}
      </select>

      <label htmlFor="cityName">Nombre de la Ciudad:</label>
      <input
        type="text"
        id="cityName"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        required
      />

      <button type="submit">Registrar Ciudad</button>
    </form>
  );
};

export default CityForm;