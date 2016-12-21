var express = require('express');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var path = require('path');
var expressValidator = require('express-validator');


/**
 * Create Express server.
 */

var app = express();

var hour = 3600000;
var day = hour * 24;
var week = day * 7;

/**
 * Load controllers.
 */
var API = require('./controllers/api');

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(compress());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'), { maxAge: week }));


/**
 * Application routes.
 */

app.get('/', API.index);

app.get('/api/', API.index);

app.get('/api/v1/regions', API.regions)

app.get('/api/v1/regions/:regionName', API.region)

app.get('/api/v1/subregions', API.subregions)

app.get('/api/v1/subregions/:subregionName', API.subregion)

app.get('/api/v1/currencies', API.currencies);

app.get('/api/v1/currencies/:currency_code', API.oneCurrency);

app.get('/api/v1/countries', API.getAll);

app.get('/api/v1/countries/callingcode/:callingCode', API.callingCode)

app.get('/api/v1/countries/currency/:currency_code', API.currency)

app.get('/api/v1/countries/cca2/:country_code', API.countryCodeCCA2);

app.get('/api/v1/countries/cca3/:country_code', API.countryCodeCCA3);

app.get('/api/v1/countries/:country_code', API.countryCodeCCA2)

app.get('/api/v1/langs', API.langs)

app.get('/api/v1/langs/:lang_code', API.lang)


/**
 * 500 Error Handler.
 * As of Express 4.0 it must be placed at the end, after all routes.
 */

app.use(function(err, req, res, next){
  // treat as 404
  if (err.message
    && (~err.message.indexOf('not found')
    || (~err.message.indexOf('Cast to ObjectId failed')))) {
    return next()
  }
  // log it
  // send emails if you want
  // error page
  res.status(500).json({
    error: err,
    //pkg: pkg,
    //CONFIG: CONFIG
  })
})

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).json({
    url: req.originalUrl,
    message: "Sorry, that page does not exist",
    code: 34
  })
})

if (app.get('env') === 'development') {
  app.use(errorHandler())
}

/**
 * Start Express server.
 */

app.listen(app.get('port'), function() {
  console.log("✔ Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});

module.exports = app;
