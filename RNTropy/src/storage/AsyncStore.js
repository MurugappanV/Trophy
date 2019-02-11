import { AsyncStorage } from "react-native";

export function setCurrentUserIdStorage(userId: number) {
	console.log("setting id 1", userId);
	if (userId == null) {
		AsyncStorage.removeItem("userId");
	} else {
		console.log("setting id", userId);
		AsyncStorage.setItem("userId", `${userId}`);
	}
}

export function getCurrentUserIdStorage() {
	console.log("getting id");
	return AsyncStorage.getItem("userId");
}

export function setUserStorage(id: number, user: any) {
	console.log("setting id 1", user);
	if (user == null) {
		AsyncStorage.removeItem(`user${id}`);
	} else {
		console.log("setting id", user);
		AsyncStorage.setItem(`user${id}`, JSON.stringify({ user }));
	}
}

export function getUserStorage(id: number) {
	console.log("getting id");
	return AsyncStorage.getItem(`user${id}`);
}
