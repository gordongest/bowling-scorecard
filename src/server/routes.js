const Controllers = require('../database/controllers');

module.exports = (app) => {
    // listening for incoming requests to endpoints at
    // http://localhost:3001

    // for testing purposes
    app.get('/test', Controllers.greeting)

    // GET route for current scores
    app.get('/scores', Controllers.getScores)

    // POST route for updating score
    app.post('/bowl', Controllers.addScore)

    // DELETE route for deleting score?
    app.delete('delete', Controllers.delete)
};