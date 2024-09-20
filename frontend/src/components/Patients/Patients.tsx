import React, { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Patient } from "../Patient/Patient";
import { PatientModal } from "../PatientModal/PatientModal";
import { fetchPatients, deletePatient, updatePatient, PatientProps } from "../../services/patientServices"; // Importar servicios
import './patients.css';

export const Patients: React.FC = () => {
  const [patients, setPatients] = useState<PatientProps[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PatientProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nameFilter, setNameFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [hospitalFilter, setHospitalFilter] = useState('');

  const fetchAndSetPatients = () => {
    fetchPatients()
      .then(setPatients)
      .catch(error => console.error("Error fetching patients:", error));
  };

  const handleDelete = (id: number) => {
    deletePatient(id)
      .then(() => {
        setPatients(patients.filter(patient => patient.id !== id));
      })
      .catch(error => console.error('Error deleting patient:', error));
  };

  const handleUpdate = (updatedPatient: PatientProps) => {
    updatePatient(updatedPatient)
      .then(() => {
        setPatients(prevPatients => 
          prevPatients.map(patient => 
            patient.id === updatedPatient.id ? { ...patient, ...updatedPatient } : patient
          )
        );
        setIsModalOpen(false);
      })
      .catch(error => console.error('Error updating patient:', error));
  };

  const openModal = (patient: PatientProps) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchAndSetPatients();
  }, []);

  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    patient.cityOfOrigin.toLowerCase().includes(cityFilter.toLowerCase()) &&
    patient.hospitalOfOrigin.toLowerCase().includes(hospitalFilter.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="patientsList patientList__container">
        <div className="filters">
          <input
            type="text"
            placeholder="Filtrar por nombre"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filtrar por ciudad"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filtrar por hospital"
            value={hospitalFilter}
            onChange={(e) => setHospitalFilter(e.target.value)}
          />
        </div>
        <div className="patients__Attributes">
          <p>ID</p>
          <p>Name</p>
          <p>Age</p>
          <p>Gender</p>
          <p>City of Origin</p>
          <p>Hospital of Origin</p>
          <p>Actions</p>
        </div>
        {filteredPatients.length > 0 ? (
          filteredPatients.map(patient => (
            <Patient
              key={patient.id}
              {...patient}
              onDelete={handleDelete}
              onUpdate={openModal}
            />
          ))
        ) : (
          <p>No hay pacientes disponibles</p>
        )}
      </div>
      {isModalOpen && selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onSave={handleUpdate}
          onClose={closeModal}
        />
      )}
    </>
  );
};
