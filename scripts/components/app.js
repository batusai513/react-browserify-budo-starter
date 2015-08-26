var React = require('react');
var sortBy = require('sort-by');

let {h1, div, ul, li} = React.DOM;


var koombeans = [
	{nombre: "Richard", area: "front-end"},
	{nombre: "David", area: "front-end"},
	{nombre: "Mauricio", area: "front-end"},
	{nombre: "Andres", area: "front-end"},
	{nombre: "LALE", area: "front-end"},
	{nombre: "Macp", area: "front-end"},
	{nombre: "Lumir", area: "back-end"},
	{nombre: "arbol", area: "back-end"},
	{nombre: "Icas", area: "back-end"},
	{nombre: "diego", area: "design"},
];

var KoombeansList = React.createClass({
	render: function() {
		var frontEnd = koombeans.filter((koombean) =>{
			return koombean.area === 'front-end';
		})
		.sort(sortBy('nombre'))
		.map((koombean) => {
			return <li key={Math.random()}>{koombean.nombre} <b>{koombean.area}</b></li>
		});
		return(
			<div>
				<h1>Koombea frontend</h1>
				<ul>
					{frontEnd}
				</ul>
			</div>
		);
	}
});

let element = (
	div({}, 
		h1({}, "El equipo de markup"),
		ul({}, 
			li({}, "David"),
			li({}, "Mauricio"),
			li({}, "Richard")
		)
	)
);

var fetchUsers = (cb) => {
	setTimeout(() => { cb([{name: "Richard"}, {name: "juana"}, {name: "stefany"}]) }, 500);
};

var App = React.createClass({
	getInitialState(){
		return {
			users: [],
			loaded: false
		}
	},
	componentDidMount(){
		fetchUsers((users) => {
				this.setState({
					users,
					loaded: true
				});
			}
		);
	},
	render(){
		var users;
		if(!this.state.loaded){
			return <div>Cargando</div>;
		}else{
			users = this.state.users.map((user) => { user; return <li key={Math.random()}>{user.name} </li>});
		}
		return (
			<ul>
				{users}
			</ul>
		);
	}
});

module.exports = KoombeansList;