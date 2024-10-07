import { registerPatient } from "../../services/patientServices";

import "./registerPatient.css";
const onSubmit = (event) => {
  event.preventDefault();

  // Capturar los datos del formulario
  const { name, age, gender, dateOfBirth, cityOfOrigin, hospitalOfOrigin, tutorName, tutorPhone } = event.target;

  const patientData = {
    name: name.value,
    age: Number(age.value),
    gender: gender.value,
    dateOfBirth: new Date(dateOfBirth.value).toISOString(),
    cityOfOrigin: cityOfOrigin.value,
    hospitalOfOrigin: hospitalOfOrigin.value,
    tutorName: tutorName.value,
    tutorPhone: tutorPhone.value,
  };
  console.log(patientData); // Asegúrate de que los datos son correctos

  // Llamar a la función para registrar al paciente
  registerPatient(patientData)
    .then(() => {
      console.log("Patient registered successfully!");
    })
    .catch((error) => {
      console.error("Error registering patient:", error);
    });
};



export const FormPatient = () => {
  return (
    <form className="registerForm" onSubmit={onSubmit}>
    <label htmlFor="name">Name</label>
    <input placeholder="Enter your full name" name="name" type="text" id="name" />

    <label htmlFor="age">Age</label>
    <input type="text" id="age" name="age" placeholder="Enter your age" />

    <label htmlFor="gender">Gender</label>
    <div className="flexGender">
      <label htmlFor="male">
        <input type="radio" id="male" name="gender" value="M" /> M
      </label>
      <label htmlFor="female">
        <input type="radio" id="female" name="gender" value="F" /> F
      </label>
      <label htmlFor="other">
        <input type="radio" id="other" name="gender" value="Other" /> Other
      </label>
    </div>

    <label htmlFor="dateOfBirth">Date of Birth</label>
    <input type="date" id="dateOfBirth" name="dateOfBirth" />

    <label htmlFor="cityOfOrigin">City of Origin</label>
    <input type="text" id="cityOfOrigin" placeholder="Enter your city" name="cityOfOrigin" />

    <label htmlFor="hospitalOfOrigin">Hospital of Origin</label>
    <input type="text" id="hospitalOfOrigin" placeholder="Enter your hospital" name="hospitalOfOrigin" />

    <label htmlFor="tutorName">Tutor Name</label>
    <input type="text" id="tutorName" placeholder="Enter your tutor name" name="tutorName" />

    <label htmlFor="tutorPhone">Tutor Phone</label>
    <input type="tel" id="tutorPhone" placeholder="Enter your tutor phone" name="tutorPhone" />

    <input className="submitPatient" type="submit" value="Submit" />
  </form>
  )
}
