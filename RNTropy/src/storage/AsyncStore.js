import { AsyncStorage } from "react-native";

export function setCurrentUserIdStorage(userId: number) {
	if (userId == null) {
		AsyncStorage.removeItem("userId");
	} else {
		AsyncStorage.setItem("userId", userId);
	}
}

export function getCurrentUserIdStorage() {
	return AsyncStorage.getItem("userId");
}
