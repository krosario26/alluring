var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/services', routes.services);
app.get('/portfolio', routes.portfolio);
app.get('/contact', routes.contact);
app.get('/webdesign', routes.webdesign);
app.get('/branding', routes.branding);
app.get('/print', routes.print);

var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Listening on port 3000');
});
