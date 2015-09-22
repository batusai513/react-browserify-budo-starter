import React, {createClass, PropTypes} from 'react';

export default createClass({
     displayName: 'Filter',

     render(){
	  var { placeholder, onChangeHandler, style } = this.props;
	  return(
	       <input style={style} placeholder={ placeholder } onChange={onChangeHandler} ref="searchField" type="text" />
	  );
     }
});
