import { CreatePatientDto, PatientDasource, PatientEntity, PatientRepository, UpdatePatientDto } from "../../domain";

export class PatientRepositoryImpl implements PatientRepository{

    constructor(
        private readonly datasource: PatientDasource,
    ){}
    create(createPatientDto: CreatePatientDto): Promise<PatientEntity> {
        return this.datasource.create(createPatientDto)
    }
    getAll(): Promise<PatientEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<PatientEntity> {
        return this.datasource.findById(id)
    }
    updateById(updatePatientDto: UpdatePatientDto): Promise<PatientEntity> {
        return this.datasource.updateById(updatePatientDto);
    }
    deletedById(id: number): Promise<PatientEntity> {
        return this.datasource.deleteById(id);
    }

}