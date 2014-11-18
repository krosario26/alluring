var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', routes);


var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port 3000');
});
