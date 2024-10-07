
import { Header } from "../Header/Header";
import  {FormPatient} from "./FormPatient"
import "./registerPatient.css";



export const RegisterPatients = () => {
  return (
    <>
      <Header />

      <div className="container">
        <FormPatient/>
      </div>
    </>
  );
};
