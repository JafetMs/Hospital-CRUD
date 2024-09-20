import { prisma } from "../../data/postgres";
import { CreatePatientDto, PatientDasource, PatientEntity, UpdatePatientDto } from "../../domain";


export class PatientDatasourceImpl implements PatientDasource{
    async create(createPatientDto: CreatePatientDto): Promise<PatientEntity> {
    
        const patient = await prisma.patient.create({
            data: createPatientDto!
          });

        return PatientEntity.fromObject( patient );
    }
    
    async getAll(): Promise<PatientEntity[]> {
        const patients = await prisma.patient.findMany();
        return patients.map(patient => PatientEntity.fromObject(patient));

    }
    
    async findById(id: number): Promise<PatientEntity> {
        const patient = await prisma.patient.findFirst({
            where:{ id}
          });

        if(!patient) throw `Patient with id ${id} not found`

        return PatientEntity.fromObject( patient );
    }
    
    async updateById(updatePatientDto: UpdatePatientDto): Promise<PatientEntity> {
         await this.findById(updatePatientDto.id);

        const updatedPatient = await prisma.patient.update({
            where: { id: updatePatientDto.id },
            data: updatePatientDto!.values // Usa propagación para actualizar todos los campos
          });

        return PatientEntity.fromObject( updatedPatient );
    }
    
    async deleteById(id: number): Promise<PatientEntity> {
        await this.findById(id);
        const patientDeleted = await prisma.patient.delete({
            where: {id}
          });

        return PatientEntity.fromObject(patientDeleted);

    }

}