const webgen = require("webgen");
const path = require("path");

webgen.render(
    __dirname,
    path.join(__dirname, "./out"),
    "12fe4a67-9773-4e02-aaf2-28d5379df8e4"
);