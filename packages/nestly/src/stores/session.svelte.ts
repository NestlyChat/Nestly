import { browser } from "$app/environment";
import BaseStore from "./base";

interface UserData {
    token?: string;
}

export default new class SessionStore extends BaseStore {
    public data = $state<UserData>({});

    constructor() {
        super();
        
        if (!browser) return;

        const token = localStorage.getItem("token");

        if (typeof token === "string") {
            try {
                this.data.token = JSON.parse(token);
            } 
            catch {};
        }
    }

    public write() {
        localStorage.setItem("token", JSON.stringify(this.data.token));
    }
}