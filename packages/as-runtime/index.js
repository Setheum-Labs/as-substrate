const fs = require("fs");
const loader = require("@assemblyscript/loader");
module.exports = loader.instantiateSync(fs.readFileSync(__dirname + "/build/runtime.wasm"), { /* imports */ })