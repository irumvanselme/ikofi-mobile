import Entity from "./storage";

const TOKEN_NAME = "ikofi-auth-token";

export class AuthController {
	static async isLoggedIn() {
		let tokenEntity = new Entity(TOKEN_NAME);
		return (await tokenEntity.get()) !== null;
	}

	static storeToken(token) {
		new Entity(TOKEN_NAME).store(token);
	}

	static async logOut() {
		await new Entity(TOKEN_NAME).remove();
	}
}
