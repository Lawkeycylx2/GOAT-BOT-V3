module.exports = {
  config: {
    name: "offbot",
    version: "1.0",
    author: "Lawkey Marvellous",
    countDown: 45,
    role: 0,
    shortDescription: "Turn off bot",
    longDescription: "Turn off bot",
    category: "owner",
    guide: "{p}{n}"
  },
  onStart: async function ({event, api}) {
    const permission = ["100084209545254"];
  if (!permission.includes(event.senderID)) {
    api.sendMessage("Chick 🐔 You don't have enough permission to use this command. Only ʚɸɞ Lawkey Marvellous ʚɸɞ can do it.", event.threadID, event.messageID);
    return;
  }
    api.sendMessage("Successfully Turned Off Marwa System ✅",event.threadID, () =>process.exit(0))}
};
