export class Credential {

    public constructor(
        public name: string, 
        public email: string, 
        public password: string,
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
