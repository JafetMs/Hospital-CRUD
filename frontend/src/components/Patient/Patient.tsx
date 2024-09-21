import React, { useState } from 'react';
import { FaUserPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";
import { PatientInfoModal } from "../PatientInfoModal/PatientInfoModal";
import { PatientModal } from "../PatientModal/PatientModal"; // Asegúrate de importar el modal
import './patient.css';

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
  onDelete: (id: number) => void;
  onUpdate: (patient: PatientProps) => void;
}

export const Patient: React.FC<PatientProps> = ({ 
  id, 
  name, 
  age, 
  gender, 
  dateOfBirth, 
  cityOfOrigin, 
  hospitalOfOrigin, 
  tutorName, 
  tutorPhone,
  onDelete,
  onUpdate
}) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // Estado para el modal de actualización
  const [patientToUpdate, setPatientToUpdate] = useState<PatientProps | null>(null); // Estado para guardar el paciente a actualizar

  const handleInfoClick = () => {
    setIsInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const handleUpdateClick = () => {
    setPatientToUpdate({
      id,
      name,
      age,
      gender,
      dateOfBirth,
      cityOfOrigin,
      hospitalOfOrigin,
      tutorName,
      tutorPhone
    });
    setIsUpdateModalOpen(true); // Abrir modal de actualización
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setPatientToUpdate(null); // Limpiar el estado al cerrar
  };

  const handleSaveUpdate = (updatedPatient: PatientProps) => {
    onUpdate(updatedPatient);
    handleCloseUpdateModal(); // Cerrar modal después de guardar
  };

  return (
    <div className="patient-card">
      <p>{id}</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{cityOfOrigin}</p>
      <p>{hospitalOfOrigin}</p>
      <div className="patient__Actions">
        <RiFileInfoFill onClick={handleInfoClick} />
        <FaUserPen onClick={handleUpdateClick} /> {/* Abre el modal de actualización */}
        <MdDelete onClick={() => onDelete(id)} />
      </div>

      {/* Modal de información */}
      {isInfoModalOpen && (
        <PatientInfoModal
          patient={{ id, name, age, gender, dateOfBirth, cityOfOrigin, hospitalOfOrigin, tutorName, tutorPhone }}
          onClose={handleCloseInfoModal}
        />
      )}

      {/* Modal de actualización */}
      {isUpdateModalOpen && patientToUpdate && (
        <PatientModal
          patient={patientToUpdate}
          onSave={handleSaveUpdate}
          onClose={handleCloseUpdateModal}
        />
      )}
    </div>
  );
};
