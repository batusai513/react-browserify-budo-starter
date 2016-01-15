var React = require('react');
var ReactDOM = require('react-dom');
var App = require("./components/app");

var app = React.createFactory(App);
module.exports = ReactDOM.render(app(), document.getElementById('container'));
