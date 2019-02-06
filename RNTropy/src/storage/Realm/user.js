import realm from "./realm";

export function addUserCredentialsRealm(data) {
	realm.write(() => {
		realm.create("UserCredentials", {
			...data,
		});
	});
}

export function getUserCredentialsRealm(id: string) {
	const creds = realm.objects("UserCredentials");
	const newCred = creds.filtered(`id = ${id}`);
	const cred = newCred.slice(0, 1);
	console.log("uc realm", cred);
	// realm.write(() => {
	// 	realm.delete(cred);
	// });
	return cred.length > 0 ? cred[0] : null;
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
