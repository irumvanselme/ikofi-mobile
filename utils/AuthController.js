import Entity from "./storage";

export class AuthController {
	TOKEN_NAME = "ikofi-auth-token";

	static async isLoggedIn() {
		let tokenEntity = new Entity(this.TOKEN_NAME);
		return (await tokenEntity.get()) !== null;
	}

	static storeToken(token) {
		new Entity(TOKEN_NAME).store(token);
	}
}
