


import { Router } from "express";
import { PatientController } from './controller';

import { PatientDatasourceImpl } from "../../infrastructure/datasource/patient.datasource.impl";

import { PatientRepositoryImpl } from "../../infrastructure/repositories/patient.repository.impl";

export class PatientRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PatientDatasourceImpl();
    
    const patientRepository = new PatientRepositoryImpl( datasource);
    
    const patientController = new PatientController(patientRepository);

    router.post('/',patientController.createPatient );
    router.get('/', patientController.getPatients)
    router.get('/:id', patientController.getPatientById )
    router.put('/:id', patientController.updatePatient );
    router.delete('/:id', patientController.deletePatient );

    return router;
  }


}

