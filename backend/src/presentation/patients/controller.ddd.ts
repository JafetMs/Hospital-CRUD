
import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

import { CreatePatientDto, UpdatePatientDto } from "../../domain/dtos";
import { PatientRepository } from "../../domain";



export class PatientController {

    //*DI

    constructor(
       private readonly patientRepository: PatientRepository,
    ){}

    

    public getPatients = async( req: Request,res : Response ) =>{
        const patients = await this.patientRepository.getAll();
        return res.json(patients);
      }

    public getPatientById = async( req: Request, res: Response ) => {
        const id = +req.params.id;

        try {
          const patient = await this.patientRepository.findById(id);
          return res.json(patient);
        } catch (error) {
          return res.status(400).json({error:`Patient with ${id} not found`})
          
        }
    }

    public createPatient = async(req: Request, res: Response ) =>{
      const [error, createPatientDto] = CreatePatientDto.create(req.body);

      if (error) return res.status(400).json({error});

      const patient = await this.patientRepository.create( createPatientDto!);

      res.json( patient)
    }

    public updatePatient = async( req: Request, res: Response ) =>{
      const id = +req.params.id;
      const [error, updatePatientDto] = UpdatePatientDto.create({...req.body, id});
      // console.log(updatePatientDto?.values);

      if( error) return res.status(400).json({error});

      const updatedPatient = await this.patientRepository.updateById( updatePatientDto!);
      // console.log(updatedPatient);
      res.json(updatedPatient);
    }

    public deletePatient = async ( req: Request, res: Response ) => {
      const id = +req.params.id;
      const deletedPatient = await this.patientRepository.findById( id );

      return res.json(deletedPatient);

    }
}