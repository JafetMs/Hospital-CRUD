import React, { useEffect, useState } from 'react';
import './patientModal.css';

interface PatientModalProps {
  patient: {
    id: number;
    name: string;
    age: number;
    gender: string;
    dateOfBirth: string;
    cityOfOrigin: string;
    hospitalOfOrigin: string;
    tutorName: string;
    tutorPhone: string;
  };
  onSave: (updatedPatient: PatientProps) => void;
  onClose: () => void;
}

interface PatientProps {
  id: number;
  name: string;
  age: number;
  gender: string;
  dateOfBirth: string;
  cityOfOrigin: string;
  hospitalOfOrigin: string;
  tutorName: string;
  tutorPhone: string;
}

export const PatientModal: React.FC<PatientModalProps> = ({ patient, onSave, onClose }) => {
  const [formData, setFormData] = useState<PatientProps>(patient);

  useEffect(() => {
    document.body.classList.add('modal-active');
    return () => {
      document.body.classList.remove('modal-active');
    };
  }, []);

  const formatDateForInput = (isoDate: string) => isoDate.split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData };
      if (formData.dateOfBirth) {
        updatedData.dateOfBirth = new Date(formData.dateOfBirth).toISOString();
      }
      await onSave(updatedData);
    } catch (error) {
      console.error("Error while saving the patient data:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span> {/* Icono de cierre */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <p>Gender</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="M"
                checked={formData.gender === 'M'}
                onChange={handleChange}
              /> 
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="F"
                checked={formData.gender === 'F'}
                onChange={handleChange}
              /> 
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              /> 
              Other
            </label>
          </div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formatDateForInput(formData.dateOfBirth)}
            onChange={handleChange}
          />
          <label htmlFor="cityOfOrigin">City of Origin</label>
          <input
            type="text"
            id="cityOfOrigin"
            name="cityOfOrigin"
            value={formData.cityOfOrigin}
            onChange={handleChange}
          />
          <label htmlFor="hospitalOfOrigin">Hospital of Origin</label>
          <input
            type="text"
            id="hospitalOfOrigin"
            name="hospitalOfOrigin"
            value={formData.hospitalOfOrigin}
            onChange={handleChange}
          />
          <label htmlFor="tutorName">Tutor Name</label>
          <input
            type="text"
            id="tutorName"
            name="tutorName"
            value={formData.tutorName}
            onChange={handleChange}
          />
          <label htmlFor="tutorPhone">Tutor Phone</label>
          <input
            type="tel"
            id="tutorPhone"
            name="tutorPhone"
            value={formData.tutorPhone}
            onChange={handleChange}
          />
          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
