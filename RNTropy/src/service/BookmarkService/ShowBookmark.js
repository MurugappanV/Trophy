import { ItpAxiosInstance } from "../axios";

const ShowBoookmarkApi = (userId, onSuccess, onFailure, onError) => {
	const url = "ws/show-bookmarks/";
	const bookmarkUrl = url + userId;
	console.log("Show Bookmark Url: ", bookmarkUrl);
	ItpAxiosInstance.get(bookmarkUrl)
		.then((response: any) => {
			if (response.data) {
				console.log("Got Show Boomark response:", response);
				console.log("Show bookmarks are :", response.data.items);
				onSuccess(response.data.items);
			} else {
				console.log("Failed to Show Boomark response:", response);
				onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("Error to Show Boomark response:", error);
			onError(error);
		});
};

export default ShowBoookmarkApi;
