import { UpdatePatientDto } from "../../dtos";
import { PatientEntity } from "../../entities/patient.entity";
import { PatientRepository } from "../../respositories/patient.repository";

export interface UpdatePatientUseCase {
    execute( dto: UpdatePatientDto): Promise<PatientEntity>;

}

export class UpdatePatient implements UpdatePatientUseCase{
    constructor(
        private readonly repository: PatientRepository
    ){
        
    }
    execute(dto: UpdatePatientDto): Promise<PatientEntity> {
        return this.repository.updateById(dto);
    }
}