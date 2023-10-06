export class Address {

    public constructor( 
        public street: string, 
        public zip: number, 
        public city: string
        ) {
            this.street = street;
            this.zip = zip;
            this.city = city;
        }
}
