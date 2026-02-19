import conf from "../conf/conf";

import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    acount;

    constructor(){
        this.client.setEndpoint(conf.appwiteUrl)
        .setProject(conf.appwiteProjectId);
        this.acount = new Account(this.client);
    }
}

const authService = new AuthService();

export default AuthService;