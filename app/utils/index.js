const 
    papa = require("papaparse"),
    fs = require("fs"),
    util = require("util");

const readFilePromise = util.promisify(fs.readFile);

class ParseError extends Error {
    constructor(message) {
        super(message);
    }
}

async function parseCSV(pathToFile, parseOpt) {

    let file;

    try {
        file = await readFilePromise(pathToFile, { encoding: "utf8" });

        return papa.parse(file, parseOpt).data;
    }
    catch(e) {
        console.error("error through parse file", e);
        throw new ParseError(`error through parse file, reason: ${e.message}`);
    }
}

module.exports = {
    parseCSV
}



