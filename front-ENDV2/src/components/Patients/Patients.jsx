import React, { useState, useEffect } from 'react';
import { fetchPatients, deletePatient, updatePatient } from '../../services/patientServices';
import { Header } from '../Header/Header';
import { FaUserPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";
import './patients.css';

const DeleteModal = ({ patient, onDelete, onClose }) => (
  <div className="modal">
    <div className="overlay">
      <div className="modal-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete <strong>{patient.name}</strong>? This action cannot be undone.</p>
        <div className="modal__buttons">
          <button id="confirmDelete" className='confirm' onClick={onDelete}>Yes, Delete</button>
          <button id="cancelDelete" className='cancel' onClick={onClose}>No, Cancel</button>
        </div>
      </div>
    </div>
  </div>
);

const DetailsModal = ({ patient, onClose }) => (
  <div className="modal">
    <div className="overlay">
      <div className="modal-content">
        <h2>Patient Details</h2>
        <div>
          <p><strong>ID:</strong> {patient.id}</p>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Date of Birth:</strong> {patient.dateOfBirth}</p>
          <p><strong>Registration Date:</strong> {patient.registrationDate}</p>
          <p><strong>City:</strong> {patient.cityOfOrigin}</p>
          <p><strong>Hospital:</strong> {patient.hospitalOfOrigin}</p>
          <p><strong>Tutor Name:</strong> {patient.tutorName}</p>
          <p><strong>Tutor Phone:</strong> {patient.tutorPhone}</p>
        </div>
        <div className="modalInfo">
          <button className='cancel' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  </div>
);

const EditModal = ({ patient, onSave, onClose }) => {
  const [formData, setFormData] = useState({ ...patient });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convertir la fecha de nacimiento a ISO y la edad a número
    const updatedData = {
      ...formData,
      dateOfBirth: new Date(formData.dateOfBirth).toISOString(),
      age: Number(formData.age),
    };
  
    try {
      const updatedPatient = await updatePatient(updatedData);
      onSave(updatedPatient);
    } catch (error) {
      console.error("Error updating patient:", error);
      // Maneja el error si es necesario
    }
  };
  

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <h2>Edit Patient</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cityOfOrigin">City:</label>
              <input
                type="text"
                id="cityOfOrigin"
                name="cityOfOrigin"
                value={formData.cityOfOrigin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalOfOrigin">Hospital:</label>
              <input
                type="text"
                id="hospitalOfOrigin"
                name="hospitalOfOrigin"
                value={formData.hospitalOfOrigin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutorName">Tutor Name:</label>
              <input
                type="text"
                id="tutorName"
                name="tutorName"
                value={formData.tutorName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tutorPhone">Tutor Phone:</label>
              <input
                type="text"
                id="tutorPhone"
                name="tutorPhone"
                value={formData.tutorPhone}
                onChange={handleChange}
              />
            </div>
            <div className="modal__buttons">
              <button type="submit" className='confirm'>Save</button>
              <button type="button" className='cancel' onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [modal, setModal] = useState({ visible: false, type: null, patient: null });

  useEffect(() => {
    const getPatients = async () => {
      const data = await fetchPatients();
      setPatients(data);
    };
    getPatients();
  }, []);

  const closeModal = () => setModal({ visible: false, type: null, patient: null });

  const handleDelete = async () => {
    try {
      await deletePatient(modal.patient.id);
      setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== modal.patient.id));
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = (updatedPatient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
    closeModal();
  };

  const openModal = (type, patient = null) => setModal({ visible: true, type, patient });

  return (
    <>
      <Header />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>Hospital</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.cityOfOrigin}</td>
                  <td>{patient.hospitalOfOrigin}</td>
                  <td className='actions'>
                    <RiFileInfoFill className="actions__icon" onClick={() => openModal('details', patient)} />
                    <FaUserPen className="actions__icon" onClick={() => openModal('edit', patient)} />
                    <MdDelete className="actions__icon" onClick={() => openModal('delete', patient)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No patients found</td>
              </tr>
            )}
          </tbody>
        </table>

        {modal.visible && modal.type === 'delete' && (
          <DeleteModal
            patient={modal.patient}
            onDelete={handleDelete}
            onClose={closeModal}
          />
        )}

        {modal.visible && modal.type === 'details' && (
          <DetailsModal
            patient={modal.patient}
            onClose={closeModal}
          />
        )}

        {modal.visible && modal.type === 'edit' && (
          <EditModal
            patient={modal.patient}
            onSave={handleSave}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
};
