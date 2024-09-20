import { PatientEntity } from "../../entities/patient.entity";
import { PatientRepository } from "../../respositories/patient.repository";

export interface GetPatientsUseCase {
    execute(): Promise<PatientEntity[]>;

}

export class GetPatients implements GetPatientsUseCase{
    constructor(
        private readonly repository: PatientRepository
    ){
        
    }
    execute(): Promise<PatientEntity[]> {
        return this.repository.getAll();
    }
}