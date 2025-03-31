import { browser } from "$app/environment";
import BaseStore from "./base";
import SessionStore from "./session.svelte";

interface User {
    email?: string;
    error?: string;
}

export default new class UserStore extends BaseStore {
    public data = $state<User>({});

    constructor() {
        super();
        if (browser && SessionStore.data.token) {
            this.fetchUserData();
        }
    }

    public async login(email: string, password: string): Promise<boolean> {
        this.data.error = undefined;

        try {
            const response = await fetch('/auth', {
                method: 'GET',
                headers: { 'email': email, 'password': password }
            });

            const data = await response.json();

            if (response.ok) {
                SessionStore.data.token = data.token;
                SessionStore.write();
                await this.fetchUserData();
                return true;
            } else {
                this.data.error = data.message || 'Login failed';
                return false;
            }
        } catch (error) {
            this.data.error = 'Network error during login';
            return false;
        }
    }

    public async register(email: string, password: string): Promise<boolean> {
        this.data.error = undefined;

        try {
            const response = await fetch('/auth', {
                method: 'POST',
                headers: { 'email': email, 'password': password }
            });

            const data = await response.json();

            if (response.ok) {
                SessionStore.data.token = data.token;
                SessionStore.write();
                this.data.email = email;
                return true;
            } else {
                this.data.error = data.message || 'Registration failed';
                return false;
            }
        } catch (error) {
            this.data.error = 'Network error during registration';
            return false;
        }
    }

    private async fetchUserData(): Promise<void> {
        if (!SessionStore.data.token) return;

        try {
            const response = await fetch('/api/user', {
                headers: {
                    'Authorization': `Bearer ${SessionStore.data.token}`
                }
            });

            if (response.ok) {
                const userData = await response.json();
                this.data.email = userData.email;
            } else {
                this.logout();
            }
        } catch (error) {
            this.data.error = 'Failed to fetch user data';
        }
    }

    public logout(): void {
        this.data.email = undefined;
        SessionStore.data.token = undefined;
        SessionStore.write();
    }
}