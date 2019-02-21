import { ItpAxiosInstance } from "../axios";

const ManageBoookmarkApi = (
	userId,
	nodeId,
	siteKey,
	manageFlag,
	onSuccess,
	onFailure,
	onError,
) => {
	const managaeBookmarkUrl = "ws/save-bookmark";
	ItpAxiosInstance.post(managaeBookmarkUrl, {
		user_id: userId,
		node_id: nodeId,
		site_key: siteKey,
		flag: manageFlag,
	})
		.then((response: any) => {
			if (response) {
				console.log("Got Manage Boomark response:", response);
				//onSuccess(response.data.items);
			} else {
				console.log("Failed to Manage Boomark response:", response);
				//onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("Error to Manage Boomark response:", error);
			//onError(error);
		});
};

export default ManageBoookmarkApi;
