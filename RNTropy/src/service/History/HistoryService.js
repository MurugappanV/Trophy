import { ItpAxiosInstance } from "../axios";

const ShowHistorykApi = (userId, onSuccess, onFailure, onError) => {
	const url = "ws/show-history/";
	const bookmarkUrl = url + userId;
	console.log("Show Bookmark Url: ", bookmarkUrl);
	ItpAxiosInstance.get(bookmarkUrl)
		.then((response: any) => {
			if (response.data) {
				console.log("Got Show History response:", response);
				console.log("Show History are :", response.data.items);
				onSuccess(response.data.items);
			} else {
				console.log("Failed to Show History response:", response);
				onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("Error to Show History response:", error);
			onError(error);
		});
};

export default ShowHistorykApi;
