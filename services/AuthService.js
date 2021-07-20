import { Service } from "./Service";

export class AuthService extends Service {
	static register(body) {
		return this.post("/api/auth/register", body);
	}

	static login(body) {
		return this.post("/api/auth/login", body);
	}

	static profile(body) {
		return this.post("/api/auth/profile", body);
	}
}
