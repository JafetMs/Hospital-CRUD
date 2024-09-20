export class PatientEntity {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly age: number,
        public readonly gender: 'M' | 'F' | 'Other',  // Matching the Gender enum
        public readonly dateOfBirth: Date,
        public readonly cityOfOrigin: string,
        public readonly registrationDate: Date,
        public readonly hospitalOfOrigin: string,
        public readonly tutorName: string,
        public readonly tutorPhone: string,
    ){}

    public static fromObject(object: { [key: string]: any }): PatientEntity {
        const { id, name, age, gender, dateOfBirth, cityOfOrigin, registrationDate, hospitalOfOrigin, tutorName, tutorPhone } = object;

        // Validaciones de cada campo
        if (!id || typeof id !== 'number') {
            throw new Error('Invalid or missing id');
        }

        if (!name || typeof name !== 'string') {
            throw new Error('Invalid or missing name');
        }

        if (!age || typeof age !== 'number') {
            throw new Error('Invalid or missing age');
        }

        if (!gender || !['M', 'F', 'Other'].includes(gender)) {
            throw new Error('Invalid or missing gender');
        }

        if (!dateOfBirth || isNaN(new Date(dateOfBirth).getTime())) {
            throw new Error('Invalid or missing date of birth');
        }

        if (!cityOfOrigin || typeof cityOfOrigin !== 'string') {
            throw new Error('Invalid or missing city of origin');
        }

        if (!registrationDate || isNaN(new Date(registrationDate).getTime())) {
            throw new Error('Invalid or missing registration date');
        }

        if (!hospitalOfOrigin || typeof hospitalOfOrigin !== 'string') {
            throw new Error('Invalid or missing hospital of origin');
        }

        if (!tutorName || typeof tutorName !== 'string') {
            throw new Error('Invalid or missing tutor name');
        }

        if (!tutorPhone || typeof tutorPhone !== 'string') {
            throw new Error('Invalid or missing tutor phone');
        }

        // Crear la instancia de PatientEntity con los valores validados
        return new PatientEntity(
            id,
            name,
            age,
            gender,
            new Date(dateOfBirth),  // Convertir a Date
            cityOfOrigin,
            new Date(registrationDate),  // Convertir a Date
            hospitalOfOrigin,
            tutorName,
            tutorPhone
        );
    }
}
