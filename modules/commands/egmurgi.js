const fs = require("fs");
module.exports.config = {
	name: "🐣",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🐣",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🐓")==0 || event.body.indexOf("🐥")==0 || event.body.indexOf("🐣")==0 || event.body.indexOf("🐔")==0) {
		var msg = {
				body: "কি্ঁরে্ঁ মু্ঁর্ঁগি্ঁ চো্ঁর্ঁ এ্ঁখা্ঁনে্ঁ কি্ঁ ক্ঁরি্ঁস্ঁ🐤🤣👈",
				attachment: fs.createReadStream(__dirname + `/noprefix/murgi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }