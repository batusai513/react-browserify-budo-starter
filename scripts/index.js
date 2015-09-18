import React, {createClass, createElement, PropTypes} from 'react';
import App from './components/app';
import Comp from './components/example';

var { h1, div, article } = React.DOM;

var SubComponent = createClass({
  displayName: 'SubComponent',
  propTypes:{
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  },
  getDefaultProps(){
    return {
      name: "jhon doe"
    }
  },
  render(){
    return h1({}, `${this.props.name} ${this.props.age} ${this.props.timer}`);
  }
});

var Sub = React.createFactory(SubComponent);
var ChildComponent = createClass({
  displayName: "ChildComponent",
  render(){
    return <p> Hola hola hola hola gola </p>;
  }
});
var ParentComponent = createClass({
  displayName: "ParentComponent",
  getInitialState(){
    return {
      show: true
    }
  },
  onClickHandler(message, e){
    this.props.onClickHandler(message);
  },
  toggleChildren(e){
    this.setState({
      show: !this.state.show
    });
  },
  render() {
    var children = null;
    if(this.state.show){
      children = this.props.children;
    }
    return (
      <div>
        <h1 onClick={this.toggleChildren}>{this.props.collectionTitle}</h1>
        {children}
      </div>
    )
  }
});
var NewComponent = createClass({
  displayName: "NewComponent",
  onClickHandler(message){
    this.showAlert(message);
  },
  showAlert(message){
    alert(message);
  },
  render() {
    return (
      <ParentComponent onClickHandler={this.onClickHandler} {...this.props}>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
        <p> Hola hola hola hola gola gola</p>
      </ParentComponent>
    );
  }
});
var Component = createClass({
  displayName: 'Component',
  getInitialState(){
    return{
      timer: 0
    }
  },
  componentDidMount(){
    setInterval(()=> {
      var newTimer = this.state.timer + 5;
      this.setState({timer: newTimer})
    }, 1000)
  },
  render(){
    return (
      <div>
        <SubComponent name="Juana la bacana" age={26} timer={this.state.timer} />
        <SubComponent age={43} timer={this.state.timer} />
      </div>

    );
    // createElement('div', {},
    //                      createElement(SubComponent, {age: 29}),
    //                      createElement(SubComponent, {name: "Duvan the coffeescript Master", age: 45})
    //                     );
  }
});



var app = React.createFactory(Component);
module.exports = React.render(<NewComponent collectionTitle="mi coleccion de cosas"/>, document.getElementById('container'));
