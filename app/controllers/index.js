const models = require("../models");

class ValidationError extends Error {
    constructor(message) {
        super(message);
    }
}

async function callsByCompanyName(req, res) {
    try {
        const companyName = req.query.company;

        if(!companyName)
            throw new ValidationError("missing company param");

        const calls = await models.callsByCompanyName(companyName);

        res.status(200).send({
            calls
        });
    }
    catch(e) {
        errorHandler(e, res);
    }
}

async function deleteCallById(req, res) {
    try {
        const qId = req.params.qId;

        if(!qId)
            throw new ValidationError("missing qId param");

        await models.deleteCallById(qId);

        res.status(200).send();
    }
    catch(e) {
        errorHandler(e, res);
    }
}

function errorHandler(error, response) {
    if(error instanceof ValidationError || error instanceof models.RowNotFind)  {
        response.status(400).send({
            error: `validation error, reason: ${error.message}`
        });
    }
    else {
        response.status(500).send();
    }
}

module.exports = {
    callsByCompanyName,
    deleteCallById
}