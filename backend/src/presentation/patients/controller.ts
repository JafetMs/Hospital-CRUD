
import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

import { CreatePatientDto, UpdatePatientDto } from "../../domain/dtos";
import { CreatePatient, DeletePatient, GetPatient, GetPatients, PatientRepository, UpdatePatient } from "../../domain";



export class PatientController {

    //*DI

    constructor(
       private readonly patientRepository: PatientRepository,
    ){}

    

    public getPatients = ( req: Request,res : Response ) =>{
        new GetPatients( this.patientRepository)
          .execute()
          .then( patients => res.json(patients))
          .catch( error => res.status(400).json({error}))
      }

    public getPatientById = ( req: Request, res: Response ) => {
        const id = +req.params.id;

       new GetPatient( this.patientRepository)
        .execute(id)
        .then( patient => res.json(patient))
        .catch( error => res.status(400).json({error}));
    }

    public createPatient = (req: Request, res: Response ) =>{
      const [error, createPatientDto] = CreatePatientDto.create(req.body);

      if (error) return res.status(400).json({error});

      new CreatePatient( this.patientRepository)
        .execute( createPatientDto!)
        .then( patient => res.json(patient))
        .catch( error => res.status(400).json({error}));

    }

    public updatePatient = ( req: Request, res: Response ) =>{
      const id = +req.params.id;
      const [error, updatePatientDto] = UpdatePatientDto.create({...req.body, id});
      // console.log(updatePatientDto?.values);

      if( error) return res.status(400).json({error});

      new UpdatePatient( this.patientRepository)
        .execute(updatePatientDto!)
        .then( patient => res.json(patient))
        .catch( error => res.status(400).json({error}));
    }

    public deletePatient = ( req: Request, res: Response ) => {
      const id = +req.params.id;
      
      new DeletePatient( this.patientRepository)
        .execute(id)
        .then( patient => res.json(patient))
        .catch( error => res.status(400).json({error}));

    }
}