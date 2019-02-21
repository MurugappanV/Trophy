import { ItpAxiosInstance } from "../axios";

const MagazinePrevIssueApi = (id, onSuccess, onFailure, onError) => {
	const url = `ws/mag-prev-issues/${id}`;
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

export default MagazinePrevIssueApi;
