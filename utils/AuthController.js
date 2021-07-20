import Entity from "./storage";

export class AuthController {
	static async isLoggedIn() {
		let tokenEntity = new Entity("ikofi-auth-token");
		return (await tokenEntity.get()) !== null;
	}
}
