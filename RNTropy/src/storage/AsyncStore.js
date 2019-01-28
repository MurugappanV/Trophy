import { AsyncStorage } from "react-native";

export function setUserIdStorage(userId: string) {
	if (userId == null) {
		AsyncStorage.removeItem("userId");
	} else {
		AsyncStorage.setItem("userId", userId);
	}
}

export function getUserIdStorage() {
	return AsyncStorage.getItem("userId");
}
