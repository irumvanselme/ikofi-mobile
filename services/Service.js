import axios from "axios";

export const url = "http://locahost:8080";

export class Service {
	static http = axios.create({
		baseURL: url,
	});

	static get(url) {
		return this.http.get(url);
	}

	static post(url, body) {
		return this.http.post(url, body);
	}

	static put(url, body) {
		return this.http.put(url, body);
	}

	static delete(url) {
		return this.http.delete(url);
	}
}
