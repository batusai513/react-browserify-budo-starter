import React, {createClass, PropTypes} from 'react';
import sortBy from 'sort-by';
import lista from '../lista.json';
var {people} = lista;

import Filter from './filter';

var ListaItem = React.createClass({
     displayName: 'ListaItem',

     render() {
	  var {firstName, lastName, role} = this.props;
	  return(
	       <li>
		    { `${  firstName } ${lastName}` } <b>{`${role}`}</b>
	       </li>
	  );
     }
});

var Lista = React.createClass({
     displayName: 'Lista',
     render() {
	  var {trabajadores} = this.props,
	  items = trabajadores
	       .filter((trabajador) => {
		    return trabajador.role == "Web Development";
	       })
	       .sort(sortBy('firstName'))
	       .map((trabajador, idx) => {
	       return (
		    <ListaItem {...trabajador} key={idx} />
	       );
	       });
	  return(
	       <ul>
		    {items}
    	       </ul>
	  );
     },

});

var App = createClass({
     displayName: 'App',

     render(){
	  console.log(this.state.searchValue);
	  return(
	       <div>
		    <Filter style={{ borderRadius: 100 }} placeholder="Buscar Persona" onChangeHandler={this.onChangeHandler} />
		    <Lista trabajadores={this.state.listaFiltrada} />
	       </div>
	  )
     },
     getInitialState(){
	  return {
	       searchValue: "",
	       trabajadores: people,
	       listaFiltrada: people
	  }
     },

     onChangeHandler(e){
	  var searchValue = e.target.value,
	       regex = new RegExp(searchValue, 'i');
	  var listaFiltrada = this.state.trabajadores.filter((item) => {
	       return (item.firstName.search(regex) > -1);
	  });
	  this.setState({
	       searchValue,
	       listaFiltrada
	  });
     }
});

export default App;

