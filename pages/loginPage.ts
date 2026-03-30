export class LoginPage {

    async gotoLoginPage(): Promise<void> {
        console.log("Navigate to Login Page");
    }

    async login(username: string, password: string): Promise<void> {
        console.log(`Enter username: ${username}`);
        console.log(`Enter password: ${password}`);
        console.log("Click login button");
    }
}