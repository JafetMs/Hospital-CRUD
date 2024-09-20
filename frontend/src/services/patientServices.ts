import axios from 'axios';

// Definición de la interfaz PatientProps
export interface PatientProps {
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

// URL base para las solicitudes al backend
const BASE_URL = "http://localhost:3000/patients/";

// Función para registrar un nuevo paciente
export const registerPatient = async (patientData: Omit<PatientProps, 'id'>) => {
  try {
    const formattedDateOfBirth = new Date(patientData.dateOfBirth).toISOString();
    
    const response = await axios.post(BASE_URL, {
      ...patientData,
      dateOfBirth: formattedDateOfBirth
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    alert('Patient registered successfully!');
    return response.data; // Retornar los datos del paciente registrado
  } catch (error) {
    console.error(error);
    alert('Error registering patient.');
    throw new Error('Error registering patient');
  }
};

// Función para obtener todos los pacientes
export const fetchPatients = async (): Promise<PatientProps[]> => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.sort((a: PatientProps, b: PatientProps) => a.id - b.id); // Ordenar los pacientes por id
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw new Error("Error al obtener los pacientes");
  }
};

// Función para eliminar un paciente
export const deletePatient = async (id: number) => {
  try {
    await axios.delete(`${BASE_URL}${id}`);
    alert('Patient deleted successfully!');
  } catch (error) {
    console.error('Error deleting patient:', error);
    alert('Error deleting patient.');
    throw new Error('Error al eliminar el paciente');
  }
};

// Función para actualizar un paciente
export const updatePatient = async (updatedPatient: PatientProps) => {
  try {
    const formattedDateOfBirth = new Date(updatedPatient.dateOfBirth).toISOString();

    await axios.put(`${BASE_URL}${updatedPatient.id}`, {
      ...updatedPatient,
      dateOfBirth: formattedDateOfBirth
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    alert('Patient updated successfully!');
  } catch (error) {
    console.error('Error updating patient:', error);
    alert('Error updating patient.');
    throw new Error('Error al actualizar el paciente');
  }
};
