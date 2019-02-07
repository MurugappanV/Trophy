import realm from "./realm";

export function addUserCredentialsRealm(data) {
	try {
		realm.write(() => {
			realm.create(
				"UserCredentials",
				{
					...data,
				},
				true,
			);
		});
	} catch (error) {
		console.log("error", error);
	}
}

export function getUserCredentialsRealm(id: string) {
	try {
		const creds = realm.objects("UserCredentials");
		console.log("uc all", creds);
		const newCred = creds.filtered(`id = ${id}`);
		console.log("uc filtered", newCred);
		const cred = newCred.slice(0, 1);
		console.log("uc realm", cred);
		// realm.write(() => {
		// 	realm.delete(cred);
		// });
		return cred.length > 0 ? cred[0] : null;
	} catch (error) {
		console.log("error", error);
	}
	return null;
}

export function removeUserCredentialsRealm(id: string) {
	const creds = realm.objects("UserCredentials");
	const newCred = creds.filtered(`id = ${id}`);
	realm.write(() => {
		realm.delete(newCred);
	});
}

// let dogs = realm.objects("Dog");

// let tanDogs = dogs.filtered('color = "tan" AND name BEGINSWITH "B"');
