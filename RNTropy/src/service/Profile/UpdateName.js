import { ToastAndroid } from "react-native";
import { ItpAxiosInstance } from "../axios";

const updatenameAPI = (userId, userName) => {
	const changePasswordUrl = "ws/update-user-details";
	ItpAxiosInstance.post(changePasswordUrl, {
		id: userId,
		name: userName,
	})
		.then((response: any) => {
			if (response.data.status === "Success") {
				//console.log("Got Manage Change Password response:", response.data);
				ToastAndroid.show("Details are saved successfully!", ToastAndroid.SHORT);
				//onSuccess(response.data.items);
			} else {
				alert("Failed to Change Password:", response);
				//onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			alert("Error occured in updating profile name.");
			//onError(error);
		});
};

export default updatenameAPI;
