import * as SecureStorage from "expo-secure-store";

export default class Entity {
	constructor(key) {
		this.key = key;
	}

	async store(value) {
		await SecureStorage.setItemAsync(this.key, value);
	}

	async get() {
		return await SecureStorage.getItemAsync(this.key);
	}

	async isAvailable() {
		return await SecureStorage.isAvailableAsync(this.key);
	}

	async remove() {
		return await SecureStorage.deleteItemAsync(this.key);
	}
}
