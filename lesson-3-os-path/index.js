const os = require("os");
const path = require("path");
// const { totalmem } = require("os");
// const { freemem } = require("os");





// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// console.log(totalmem())


// console.log(__dirname)
// console.log(__filename)


const extensionName = path.extname("index.html");
// console.log(extensionName)


const joinName = path.join(__dirname + "/views");
console.log(joinName)

