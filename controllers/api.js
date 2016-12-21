var _ = require('lodash');
var validator = require('validator');

var countries = require('../resources/countriesV1');
var currencies = require('../resources/currencies');
var langs = require('../resources/langs');
var langsT = require('../resources/langs-translations');

var notFound = function(res) {
  res.status(404).json({
    message: "Sorry, that page does not exist",
    code: 34
  })
}

exports.index = function(req, res) {
  res.send({message : 'Welcome buddy!'});
};

exports.getAll = function(req, res) {
  res.status(200).json(countries)
}

exports.callingCode = function(req, res) {

  var calling_code = req.params.callingCode;

  var country = _.find(countries, function(co) {
    return validator.isIn(calling_code, co.callingCode)
  });

  if(!country) {
    notFound(res);
  }

  res.status(200).json(country)
}

exports.currency = function(req, res) {

  var currency_code = req.params.currency_code;

  var country = countries.filter(function(country){
    if(country.currency && country.currency.length){
      return country.currency[0] === currency_code.toUpperCase();
    }

    return false;
  })

  /*var country = _.find(countries, function(co) {
    return validator.isIn(currency_code.toUpperCase(), co.currency)
  });*/

  if(!country) {
    notFound(res);
  }

  res.status(200).json(country)
}


exports.regions = function (req, res, next) {

  var result = [];

  countries.forEach(function(country){
    var exists = false;
    
    result.forEach(function(res){
      if(res.name === country.region){
        exists = true;
      }
    })

    if(!exists && country.region){
      result.push({
        name: country.region
      })
    }

  })

  if(result.length < 1) {
    notFound(res);
  }

  res.status(200).json(result);
}


exports.region = function (req, res, next) {

  var result = [];
  var region_name = req.params.regionName;

  var country_region = _.reduce(countries, function(result, country, key) {

    if(country.region.toLowerCase() == region_name.toLowerCase()) {
      result.push(country);
    }
    return result;
  }, []);

  if(country_region.length < 1) {
    notFound(res);
  }

  res.status(200).json(country_region);
}

exports.subregions = function (req, res, next) {

  var result = [];

  countries.forEach(function(country){
    var exists = false;
    
    result.forEach(function(res){
      if(res.name === country.subregion){
        exists = true;
      }
    })

    if(!exists && country.subregion){
      result.push({
        name: country.subregion
      })
    }

  })

  if(result.length < 1) {
    notFound(res);
  }

  res.status(200).json(result);
}

exports.subregion = function (req, res, next) {

  var result = [];
  var subregion_name = req.params.subregionName;

  var country = _.reduce(countries, function(result, country, key) {

    if(country.subregion.toLowerCase() == subregion_name.toLowerCase()) {
      result.push(country);
    }
    return result;
  }, []);

  if(country.length < 1) {
    notFound(res);
  }

  res.status(200).json(country);
}

exports.countryCodeCCA2 = function(req,res,next){
  var result = [];
  var code = req.params.country_code;

  var country = _.reduce(countries, function(result, country, key) {

    if(country.cca2.toLowerCase() == code.toLowerCase()) {
      result.push(country);
    }

    return result;
  }, []);

  if(country.length < 1) {
    notFound(res);
  }

  res.status(200).json(country);
}

exports.countryCodeCCA3 = function(req,res,next){
  var result = [];
  var code = req.params.country_code;

  var country = _.reduce(countries, function(result, country, key) {

    if(country.cca3.toLowerCase() == code.toLowerCase()) {
      result.push(country);
    }

    return result;
  }, []);

  if(country.length < 1) {
    notFound(res);
  }

  res.status(200).json(country);
}


exports.currencies = function(req,res){
  res.status(200).json(currencies);
}

exports.oneCurrency = function(req,res){
  var result = [];
  var code = req.params.currency_code;

  for(var currCode in currencies){
    if(currCode.toLowerCase() === code.toLowerCase()){
      result.push(currencies[currCode]);
    }
  }

  if(result.length < 1) {
    notFound(res);
  }

  res.status(200).json(result);
}


exports.langs = function(req,res){
  res.json(langs);
}

function getLang(code){
  if(!code) return [];

  return langs.filter(function(lang){
    return lang["alpha3-b"] === code ||  lang["alpha2"] === code || lang["alpha3-t"] === code;
  })
}

function getLangTranslations(code) { // 2 letter code
  if(!code) return {};
  
  let translations = {};

  for(key in langsT){
    /*if(key === code.toLowerCase()){
      translations = langsT[key];
    }*/
    if(langsT[key][code]){
      translations[key] = langsT[key][code];
    }
  }

  return translations;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.lang = function(req,res){

  var code = req.params.lang_code.toLowerCase();

  var result = getLang(code);
  
  if(result.length < 1) {
    notFound(res);
  }

  if(req.query.translations === 'all'){
    result = result.map(function(lang){
      lang.translations = getLangTranslations(lang.alpha2);
      return lang;
    });
  } else if(req.query.translations && req.query.translations.split(',').length) {
    let requestedTranslations = req.query.translations.split(',');

    result = result.map(function(lang){
      var translations = getLangTranslations(lang.alpha2);
      var finalTranslations = {};
      
      requestedTranslations.forEach(function(code){
        if(translations[code]){
          finalTranslations[code] = capitalizeFirstLetter(translations[code]);
        }
      })

      lang.translations = finalTranslations;      
      return lang;
    });
  }

  res.status(200).json(result);

}