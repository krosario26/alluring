exports.index = function(req, res) {
	res.render('index', {title: 'Home | Alluring Advertising'});
}

exports.about = function(req, res) {
	res.render('about', {title: 'About Us | Alluring Advertising'});
}

exports.services = function(req, res) {
	res.render('services', {title: 'Services | Alluring Advertising'});
}

exports.portfolio = function(req, res) {
	res.render('portfolio', {title: 'Portfolio | Alluring Advertising'});
}

exports.webdesign = function(req, res) {
	res.render('webdesign', {title: 'Portfolio | Alluring Advertising'});
}

exports.branding = function(req, res) {
	res.render('branding', {title: 'Portfolio | Alluring Advertising'});
}

exports.print = function(req, res) {
	res.render('print', {title: 'Portfolio | Alluring Advertising'});
}

exports.clients = function(req, res) {
	res.render('clients', {title: 'Portfolio | Alluring Advertising'});
}