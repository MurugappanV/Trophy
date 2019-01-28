import Realm from "realm";

class UserCredentials extends Realm.Object {}
UserCredentials.schema = {
	name: "UserCredentials",
	properties: {
		token: "string",
		userId: "int",
	},
};

export default new Realm({ schema: [UserCredentials] });
