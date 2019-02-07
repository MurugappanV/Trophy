import Realm from "realm";

class UserCredentials extends Realm.Object {}
UserCredentials.schema = {
	name: "UserCredentials",
	primaryKey: "id",
	properties: {
		status: "string",
		id: "int",
		name: "string",
		article_bg_color: "string",
		article_font_size: "string",
		topics: "string",
		brands: "string",
		authors: "string",
	},
};

// class UserPreference extends Realm.Object {}
// UserCredentials.schema = {
// 	name: "UserCredentials",
// 	properties: {
// 		token: "string",
// 		userId: "int",
// 	},
// };

// class UserPreference extends Realm.Object {}
// UserCredentials.schema = {
// 	name: "UserCredentials",
// 	properties: {
// 		token: "string",
// 		userId: "int",
// 	},
// };

export default new Realm({ schema: [UserCredentials] });
