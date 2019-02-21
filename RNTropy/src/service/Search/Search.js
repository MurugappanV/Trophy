import { ItpAxiosInstance } from "../axios";

const SearchApi = (searchKey, onSuccess, onFailure, onError) => {
	const searchUrl = "ws/search";
	console.log("Search KEy inside the service: ", searchKey);
	ItpAxiosInstance.post(searchUrl, { key: searchKey, page: 0 })
		.then((response: any) => {
			if (response.data) {
				console.log("Got search response:", response.data);
				onSuccess(response.data.items);
			} else {
				console.log("Failed to Search response:", response);
				onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("Error to Show History response:", error);
			onError(error);
		});
};

export default SearchApi;
