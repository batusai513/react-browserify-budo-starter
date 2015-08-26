var React = require('react');
var App = require("./components/app");

var app = React.createFactory(App);
module.exports = React.render(app(), document.getElementById('container'));
