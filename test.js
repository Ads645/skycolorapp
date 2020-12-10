let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded( {extended: false}))
ourApp.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
    <p>What color is the sky?</p>
    <input name="skyColor" autocomplete="off">
    <button>Submit Answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res) {
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>`)
    } else {
        res.send(`
            <p>Sorry, that's not right answer</p>
            <a href="/">Back to homepage</a>
            `)
    }
})

ourApp.listen(3000)


