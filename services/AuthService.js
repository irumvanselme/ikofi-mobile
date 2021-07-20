import { Service } from "./Service";

class AuthService extends Service {
	async register(body) {
		return this.post("/api/auth/register", body);
	}

	async login(body) {
		return this.post("/api/auth/login", body);
	}

	async profile(body) {
		return this.post("/api/auth/profile", body);
	}
}
