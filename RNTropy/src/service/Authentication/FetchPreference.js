import { ItpAxiosInstance } from "../axios";

const FetchPreferenceApi = (userId, onSuccess, onFailure, onError) => {
	const url = `ws/user-preferences/${userId}`;
	ItpAxiosInstance.get(url)
		.then((response: any) => {
			if (response.data.status === "Success") {
				onSuccess(response.data);
			} else if (response.data.status === "Failed") {
				onFailure(response.data);
			}
		})
		.catch((error: any) => {
			onError(error);
		});
};

export default FetchPreferenceApi;
