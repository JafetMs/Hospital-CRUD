
// name, age,gender,dateOfBirth,cityOfOrigin,registrationDate,
// hospitalOfOrigin, tutorName, tutorPhone

export class CreatePatientDto{

    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly gender: 'M' | 'F' | 'Other',  // Matching the Gender enum
        public readonly dateOfBirth: Date,
        public readonly cityOfOrigin: string,
        public readonly registrationDate: Date,
        public readonly hospitalOfOrigin: string,
        public readonly tutorName: string,
        public readonly tutorPhone: string,
    ) {}


    get values(){
        const returnObj = {...this};
        console.log( returnObj)
        return returnObj;
    }
    static create( props: {[key:string]:any} ): [string?, CreatePatientDto?]{

        const { name,age,gender,dateOfBirth,cityOfOrigin,registrationDate,hospitalOfOrigin,tutorName,tutorPhone } = props;

        // if (!name) return ;

        // if (registrationDate){
        //     const
        // }
            
        

        return [undefined, new CreatePatientDto(name,age,gender,dateOfBirth,cityOfOrigin,registrationDate,hospitalOfOrigin,tutorName,tutorPhone)];
    }
}