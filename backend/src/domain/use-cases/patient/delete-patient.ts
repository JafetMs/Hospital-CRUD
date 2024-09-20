import { PatientEntity } from "../../entities/patient.entity";
import { PatientRepository } from "../../respositories/patient.repository";

export interface DeletePatientUseCase {
    execute( id: number): Promise<PatientEntity>;

}


export class DeletePatient implements DeletePatientUseCase{
    constructor(
        private readonly repository: PatientRepository
    ){
        
    }
    execute(id: number): Promise<PatientEntity> {
        return this.repository.deletedById(id);
    }
}