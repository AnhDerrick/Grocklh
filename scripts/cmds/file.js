const fs = require('fs');

module.exports = {
	config: {
		name: "file",
		aliases: ["files", "sendfile"],
		version: "1.0",
		author: "MR.AYAN", //** original author fb I'd : https://m.me/NOOBS.DEVELOPER.AYAN **//
		countDown: 5,
		role: 0,
		shortDescription: "Send bot script",
		longDescription: "Send bot specified file ",
		category: "𝗢𝗪𝗡𝗘𝗥",
		guide: "{pn} file name. Ex: .{pn} filename"
	},

	onStart: async function ({ message, args, api, event }) {
		const permission = ["100053227594219",];
		if (!permission.includes(event.senderID)) {
			return api.sendMessage("📛 𝐋𝐨𝐥.. 𝐈𝐥 𝐯𝐞𝐮𝐭 𝐯𝐨𝐥𝐞𝐫. 𝐒𝐞𝐮𝐥 𝐦𝐨𝐧 𝐌𝐚𝐢̂𝐭𝐫𝐞 𝐩𝐞𝐮𝐭 𝐔𝐭𝐢𝐥𝐢𝐬𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐂𝐦𝐝.. 😝", event.threadID, event.messageID);
		}

		const fileName = args[0];
		if (!fileName) {
			return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
		}

		const filePath = __dirname + `/${fileName}.js`;
		if (!fs.existsSync(filePath)) {
			return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
		}

		const fileContent = fs.readFileSync(filePath, 'utf8');
		api.sendMessage({ body: fileContent }, event.threadID);
	}
};
