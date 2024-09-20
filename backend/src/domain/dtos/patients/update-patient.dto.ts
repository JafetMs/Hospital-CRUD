
// name, age,gender,dateOfBirth,cityOfOrigin,registrationDate,
// hospitalOfOrigin, tutorName, tutorPhone

export class UpdatePatientDto{

    private constructor(
        public readonly id: number,
        public readonly name?: string,
        public readonly age?: number,
        public readonly gender?: 'M' | 'F' | 'Other',  // Matching the Gender enum
        public readonly dateOfBirth?: Date,
        public readonly cityOfOrigin?: string,
        public readonly registrationDate?: Date,
        public readonly hospitalOfOrigin?: string,
        public readonly tutorName?: string,
        public readonly tutorPhone?: string,
    ) {}


    get values(){
        const returnObj = {...this};
        // console.log( returnObj)
        return returnObj;
    }
    static create( props: {[key:string]:any} ): [string?, UpdatePatientDto?]{

        const { id,name,age,gender,dateOfBirth,cityOfOrigin,registrationDate,hospitalOfOrigin,tutorName,tutorPhone } = props;

        if ( !id || isNaN(id)){
            return ['id must be a valid number'];
        }

        return [undefined, new UpdatePatientDto(id,name,age,gender,dateOfBirth,cityOfOrigin,registrationDate,hospitalOfOrigin,tutorName,tutorPhone)];
    }
}