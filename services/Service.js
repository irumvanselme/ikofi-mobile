import axios from "axios";

export const url = "http://locahost:8080";

class Service {
	http = axios.create({
		baseURL: url,
	});

	get(url) {
		return this.http.get(url);
	}

	post(url, body) {
		return this.http.post(url, body);
	}

	put(url, body) {
		return this.http.put(url);
	}

	delete(url) {
		return this.http.delete(url);
	}
}
