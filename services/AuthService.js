import { Service } from "./Service";

export class AuthService extends Service {
	static register(body) {
		return this.post("/auth/register", body);
	}

	static login(body) {
		return this.post("/auth/login", body);
	}

	static profile(body) {
		return this.post("/auth/profile", body);
	}
}
