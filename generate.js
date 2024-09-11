const webgen = require("webgen");
const path = require("path");

webgen.render(
    __dirname,
    path.join(__dirname, "./out"),
);