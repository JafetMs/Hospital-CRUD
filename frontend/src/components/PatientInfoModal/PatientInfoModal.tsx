import React, { useEffect } from 'react';
import './patientInfoModal.css';

interface PatientInfoModalProps {
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
  onClose: () => void;
}

export const PatientInfoModal: React.FC<PatientInfoModalProps> = ({ patient, onClose }) => {
  // Añadir y remover clase del body
  useEffect(() => {
    document.body.classList.add('no-scroll', 'modal-active');
    return () => {
      document.body.classList.remove('no-scroll', 'modal-active');
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h2>Patient Information</h2>
        <p>ID: {patient.id}</p>
        <p>Name: {patient.name}</p>
        <p>Age: {patient.age}</p>
        <p>Gender: {patient.gender}</p>
        <p>Date of Birth: {patient.dateOfBirth}</p>
        <p>City of Origin: {patient.cityOfOrigin}</p>
        <p>Hospital of Origin: {patient.hospitalOfOrigin}</p>
        <p>Tutor Name: {patient.tutorName}</p>
        <p>Tutor Phone: {patient.tutorPhone}</p>
      </div>
    </div>
  );
};
