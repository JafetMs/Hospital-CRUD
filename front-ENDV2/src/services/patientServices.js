import axios from 'axios';

// URL base para las solicitudes al backend
const BASE_URL = "http://localhost:3000/patients/";

export const fetchPatients = async () => {
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data;

      // Ordenar los pacientes por id de forma ascendente
      const sortedData = data.sort((a, b) => a.id - b.id);

      // console.log(sortedData);
      return sortedData;
    } catch (error) {
      console.error('Error al obtener los pacientes:', error);
    }
};

export const registerPatient = async (patientData) => {
  try {
    const response = await axios.post(
      BASE_URL,
      patientData, // Enviar los datos directamente
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("Patient registered successfully!");
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Error registering patient.");
    throw new Error("Error registering patient");
  }
};

export const deletePatient = async (id) => {
  try {
    await axios.delete(`${BASE_URL}${id}`);
    alert('Patient deleted successfully!');
  } catch (error) {
    console.error('Error deleting patient:', error);
    alert('Error deleting patient.');
    throw new Error('Error al eliminar el paciente');
  }
};



export const updatePatient = async (patient) => {
  try {
    const response = await axios.put(`http://localhost:3000/patients/${patient.id}`, {
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      dateOfBirth: patient.dateOfBirth,
      cityOfOrigin: patient.cityOfOrigin,
      hospitalOfOrigin: patient.hospitalOfOrigin,
      tutorName: patient.tutorName,
      tutorPhone: patient.tutorPhone
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el paciente');
  }
};

