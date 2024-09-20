import { PatientEntity } from "../../entities/patient.entity";
import { PatientRepository } from "../../respositories/patient.repository";

export interface GetPatientUseCase {
    execute( id: number): Promise<PatientEntity>;

}

export class GetPatient implements GetPatientUseCase{
    constructor(
        private readonly repository: PatientRepository
    ){
        
    }
    execute(id: number): Promise<PatientEntity> {
        return this.repository.findById(id);
    }
}

