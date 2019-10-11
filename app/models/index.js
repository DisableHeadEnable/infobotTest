const getRepository = require("../repository");

async function callsByCompanyName(name) {
    const repository = await getRepository();

    return repository.filter((rowObj) => rowObj.clientName === name);
}

class RowNotFind extends Error {
    constructor(message) {
        super(message);
    }
}

async function deleteCallById(id) {
    const repository = await getRepository();

    const index = repository.findIndex((rowObj) => rowObj.qId === id);

    if(index === -1)
        throw new RowNotFind(`remove call by qId error, reason: row with qid ${id} not found`);

    repository.splice(repository.findIndex((rowObj) => rowObj.qId === id), 1);
}

module.exports = {
    callsByCompanyName,
    deleteCallById,
    RowNotFind
}