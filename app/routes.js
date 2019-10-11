const 
    {   callsByCompanyName,
        deleteCallById 
    } = require('./controllers');

module.exports = function (app) {
    app.get('/calls', callsByCompanyName);
    app.delete('/calls/:qId', deleteCallById);
};
