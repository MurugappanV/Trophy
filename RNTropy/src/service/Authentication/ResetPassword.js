import { ItpAxiosInstance } from "../axios";

const ResetPasswordApi = (email, onSuccess: Function, onFailure, onError) => {
	const url = "ws/reset-pwd";
	// login='robodiego'
	// password='Buddy6jar!'
	ItpAxiosInstance.post(url, { email })
		.then((response: any) => {
			if (response.data.status === "Success") {
				onSuccess(response.data.message);
			} else if (response.data.status === "Failed") {
				onFailure(response.data.message);
			}
			// console.log("reset password response", response);
			// onSuccess(response.data.message);
		})
		.catch((error: any) => {
			console.log("reset password response");

			onError(error);
		});
};

export default ResetPasswordApi;
