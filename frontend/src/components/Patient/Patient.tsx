import React, { useState } from 'react';
import { FaUserPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";
import { PatientInfoModal } from "../PatientInfoModal/PatientInfoModal";

import './patient.css';

// Definir las props de Patient
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

  const handleInfoClick = () => {
    setIsInfoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsInfoModalOpen(false);
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
          <RiFileInfoFill onClick={handleInfoClick} /> {/* Abrir modal de información */}
          <FaUserPen onClick={() => onUpdate({
            id,
            name,
            age,
            gender,
            dateOfBirth,
            cityOfOrigin,
            hospitalOfOrigin,
            tutorName,
            tutorPhone
          })} />
          <MdDelete onClick={() => onDelete(id)} />
        </div>

        {/* Modal de información */}
        {isInfoModalOpen && (
          <PatientInfoModal
            patient={{ id, name, age, gender, dateOfBirth, cityOfOrigin, hospitalOfOrigin, tutorName, tutorPhone }}
            onClose={handleCloseModal}
          />
        )}
    </div>
  );
};
