const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZvNSHDqT#-bGHRfsHrcj-Kwi4ayJqKjILggyxBGEB7YV-zmzDXUY",
MONGODB: process.env.MONGODB || "mongodb://mongo:SsNxfPclNGelcAKdFysSlpjNMgdnUIlD@junction.proxy.rlwy.net:17857",
ALIVE_IMG: process.env.ALIVE_IMG || "https://unitedcamps.in/Images/file_5278.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true"
};
