const Handlebars = require('handlebars/runtime');
Handlebars.registerHelper('repeat', require('handlebars-helper-repeat'));
module.exports = Handlebars;