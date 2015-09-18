import React from 'react';
var name = "richard", lastName = "Roncancio";
var obj = {
  name,
  lastName
}
var {h1, div, h2, h3} = React.DOM;
console.log(`"Hello ${name}, how are you ${lastName}?"`)
export default React.createClass({
  render(){
    return (
      div({},
	  h1({}, "Hola mundo")
	 )
    )
  }

});
console.log("hola")
