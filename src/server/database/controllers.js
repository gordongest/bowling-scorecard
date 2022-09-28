module.exports = {
    greeting(req, res) {
        console.log('ding')
        res.send({ request: 'served' })
    },
    getScores(req, res) {
        console.log('scores endpoint hit')
        res.send({ scores: 'sent' })
    },
    addScore(req, res) {
        console.log('bowl endpoint hit')
        res.send({ frame: 'scored' })
    },
    delete(req, res) {
        console.log('delete endpoint hit')
        res.send({ score: 'deleted' })
    }
}