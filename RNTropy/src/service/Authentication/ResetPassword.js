import { ItpAxiosInstance } from "../axios";

const ResetPasswordApi = (email, onSuccess: Function, onFaliure, onError) => {
	const url = "ws/reset-pwd";
	// login='robodiego'
	// password='Buddy6jar!'
	ItpAxiosInstance.post(url, { email })
		.then((response: any) => {
			console.log("reset password response", response);
			onSuccess(response.data.message);
		})
		.catch((error: any) => {
			console.log("reset password response");

			onError(error);
		});
};

export default ResetPasswordApi;
