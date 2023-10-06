import { Address } from "./address";
import { Credential } from "./credential";

export class User {

    public constructor(
        public credentials: Credential,
        public address: Address
        ) {
            this.credentials = credentials;
            this.address = address;
    }
}
