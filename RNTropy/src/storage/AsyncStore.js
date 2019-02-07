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
