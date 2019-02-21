import { ItpAxiosInstance } from "../axios";

const MagazineIssueApi = (onSuccess, onFailure, onError) => {
	const url = "ws/mag-issue-listing";
	ItpAxiosInstance.get(url)
		.then((response: any) => {
			if (response.status == 200) {
				onSuccess(response.data);
			} else {
				onFailure(response.data);
			}
		})
		.catch((error: any) => {
			onError(error);
		});
};

export default MagazineIssueApi;
