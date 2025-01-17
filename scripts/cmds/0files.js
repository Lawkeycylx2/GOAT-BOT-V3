const fs = require('fs');
const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
	config: {
		name: "file",
		version: "1.0",
		author: "Lawkey Marvellous",
		countDown: 5,
		role: 0,
		shortDescription: "Send bot script",
		longDescription: "Send bot specified file ",
		category: "𝗢𝗪𝗡𝗘𝗥",
		guide: "{pn} file name. Ex: .{pn} filename"
	},

	onStart: async function ({ message, args, api, event }) {
		const permission = ["100084209545254"];
		if (!permission.includes(event.senderID)) {
			return api.sendMessage(" You don't have permission to use this command. 🐤", event.threadID, event.messageID);
		}

		const fileName = args[0];
		if (!fileName) {
			return api.sendMessage("master 𝕷𝖆𝖜𝖐𝖊𝖞 𝕸𝖆𝖗𝖛𝖊𝖑𝖑𝖔𝖚𝖘 ✨ Please provide a file name.", event.threadID, event.messageID);
		}

		const filePath = __dirname + `/${fileName}.js`;
		if (!fs.existsSync(filePath)) {
			return api.sendMessage(`master 𝕷𝖆𝖜𝖐𝖊𝖞 𝕸𝖆𝖗𝖛𝖊𝖑𝖑𝖔𝖚𝖘 ✨please the File not found: ${fileName}.js`, event.threadID, event.messageID);
		}

		const fileContent = fs.readFileSync(filePath, 'utf8');
		api.sendMessage({ body: fileContent }, event.threadID);
	}
};
const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
