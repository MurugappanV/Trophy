import { ItpAxiosInstance } from "../axios";

const MagazineDetailApi = (userId, issueId, onSuccess, onFailure, onError) => {
	const url = "ws/mag-issue-details";
	ItpAxiosInstance.get(url, { data: { user_id: userId, issue_id: issueId } })
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

export default MagazineDetailApi;
