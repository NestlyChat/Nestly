import { browser } from "$app/environment";

interface UserData {
    token?: string;
}

export default new class SessionStore {
    public data = $state<UserData>({});

    constructor() {
        if (!browser) return;

        console.log(this);
        

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