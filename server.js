const path = require('path')
const express = require('express'),
    app = express()

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, '/views'),
]);

function generateJSON(label, message) {
    var jsonData = {
        'schemaVersion': 1,
        'label': label,
        'message': message
    };
    return JSON.stringify(jsonData)
}

app.get('/', function(req, res) {
    return res.render('index', {})
});

app.get('/getdata', function(req, res) {
    var lab = req.query.lab
    var mes = req.query.mes
    res.send(generateJSON(lab, mes))
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log(`Node server listening on port ${app.get('port')}!`));