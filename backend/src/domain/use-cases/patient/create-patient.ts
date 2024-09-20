import { CreatePatientDto } from "../../dtos";
import { PatientEntity } from "../../entities/patient.entity";
import { PatientRepository } from "../../respositories/patient.repository";

export interface CreatePatientUseCase {
    execute( dto: CreatePatientDto): Promise<PatientEntity>;

}


export class CreatePatient implements CreatePatientUseCase{
    constructor(
        private readonly repository: PatientRepository
    ){
        
    }
    execute(dto: CreatePatientDto): Promise<PatientEntity> {
        return this.repository.create(dto);
    }
}