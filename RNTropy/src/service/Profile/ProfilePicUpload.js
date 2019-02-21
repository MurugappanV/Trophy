import React, { PureComponent } from "react";
import { ToastAndroid } from "react-native";
import { ItpAxiosInstance } from "../axios";

const ProfilePicUpload = (userId, path, fileName, imageType) => {
	const uploadURL = "ws/upload-profile-pic/";
	const ProfilePicUploadUrl = uploadURL + userId;
	const formData = new FormData();
	formData.append("prof_pic", {
		uri: path,
		name: fileName,
		type: imageType,
	});
	ItpAxiosInstance.post(ProfilePicUploadUrl, formData)
		.then((response: any) => {
			if (response.data.status === "Success") {
				ToastAndroid.show("Profile photo Uploaded Successfully!", ToastAndroid.SHORT);
			} else {
				console.log("Failure on Image Upload", response);
				//onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("Error  on Image Upload", error);
			alert("Error occured in Profile pic upload. Please try again later.");
		});
};

export default ProfilePicUpload;
