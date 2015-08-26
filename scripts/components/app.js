var React = require('react');
var lista = require('../lista.json').people;

var {ul, li, h1, div, b} = React.DOM;

var app = React.createClass({
	render() {
		return(
     div({},
      h1({}, "El equipo de Koombea"))
		);
	}
});

module.exports = app;
