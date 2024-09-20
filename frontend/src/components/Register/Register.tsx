import React, { useState } from 'react';
import { registerPatient } from '../../services/patientServices';  // Importar la función
import './register.css';
import { Header } from '../Header/Header';

const Register: React.FC = () => {
  // Valores iniciales del formulario
  const initialFormData = {
    name: '',
    age: '',
    gender: '',
    dateOfBirth: '', // Esto es una cadena en formato YYYY-MM-DD
    cityOfOrigin: '',
    hospitalOfOrigin: '',
    tutorName: '',
    tutorPhone: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Usar la función registerPatient del servicio
    await registerPatient({
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      cityOfOrigin: formData.cityOfOrigin,
      hospitalOfOrigin: formData.hospitalOfOrigin,
      tutorName: formData.tutorName,
      tutorPhone: formData.tutorPhone
    });

    // Limpiar los campos del formulario después del registro
    setFormData(initialFormData);
  };

  return (
    <>
      <Header/>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />

        <p>Gender</p>
        <div className="flex radio">
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" value="M" checked={formData.gender === 'M'} onChange={handleChange} /> Male
          </label>
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" value="F" checked={formData.gender === 'F'} onChange={handleChange} /> Female
          </label>
          <label htmlFor="other">
            <input type="radio" id="other" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} /> Other
          </label>
        </div>

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />

        <label htmlFor="cityOfOrigin">City of Origin</label>
        <input type="text" id="cityOfOrigin" name="cityOfOrigin" value={formData.cityOfOrigin} onChange={handleChange} />

        <label htmlFor="hospitalOfOrigin">Hospital of Origin</label>
        <input type="text" id="hospitalOfOrigin" name="hospitalOfOrigin" value={formData.hospitalOfOrigin} onChange={handleChange} />

        <label htmlFor="tutorName">Tutor Name</label>
        <input type="text" id="tutorName" name="tutorName" value={formData.tutorName} onChange={handleChange} />

        <label htmlFor="tutorPhone">Tutor Phone</label>
        <input type="tel" id="tutorPhone" name="tutorPhone" value={formData.tutorPhone} onChange={handleChange} />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Register;
