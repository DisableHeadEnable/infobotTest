const { parseCSV } = require("../utils");

const REPOSITORY_PATH = "app/repository/db.csv";

class RepositoryError extends Error {
    constructor(message) {
        super(message);
    }
}

let repository;

module.exports = async function getRepository() {
    const parseOpt = {
        header: true,
        delimiter: ", "
    }

    try {
        if (!repository) {
            repository = await parseCSV(REPOSITORY_PATH, parseOpt);
        }
        
        return repository;
    }
    catch(e) {
        throw new RepositoryError(`error through get repository, reason: ${e.message}`);
    }

}   