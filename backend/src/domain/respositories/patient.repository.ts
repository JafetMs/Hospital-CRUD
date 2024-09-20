import { CreatePatientDto, UpdatePatientDto } from "../dtos";
import { PatientEntity } from "../entities/patient.entity";



export abstract class PatientRepository {
    
    abstract create( createPatientDto :CreatePatientDto): Promise<PatientEntity>;

    abstract getAll(): Promise<PatientEntity[]>;

    abstract findById( id: number): Promise<PatientEntity>;

    abstract updateById( updatePatientDto : UpdatePatientDto): Promise<PatientEntity>;

    abstract deletedById( id: number): Promise<PatientEntity>;

}