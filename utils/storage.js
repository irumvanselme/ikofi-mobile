import * as SecureStorage from "expo-secure-store";

export default class Entity {
	constructor(key) {
		this.key = key;
	}

	async store(value) {
		try {
			await SecureStorage.setItemAsync(this.key, value);
		} catch (error) {
			console.log("Failed to store the value ");
		}
	}

	async get() {
		try {
			return await SecureStorage.getItemAsync(this.key);
		} catch (error) {
			console.log("Failed to retrieve the item you requested");
		}
	}

	async remove() {
		try {
			return await SecureStorage.deleteItemAsync(this.key);
		} catch (error) {
			console.log("Failed to remove the item");
		}
	}
}
