import { ItpAxiosInstance } from "../axios";

const Subscribe = (id, brand, flag, page, onSuccess, onFailure, onError) => {
	const url = "ws/save-preferences/podcast";
	// login='robodiego'
	// password='Buddy6jar!'
	ItpAxiosInstance.post(url, {
		user_id: id,
		values: brand,
		flag,
	})
		.then((response: any) => {
			console.log("subscribe", response);
			// if (response.status === 200) {
			// 	onSuccess(response);
			// }
		})
		.catch((error: any) => {
			// onError(error);
			console.log("error", error);
		});
};

export default Subscribe;
