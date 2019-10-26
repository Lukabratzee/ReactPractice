import React from 'react';
import logo from './logo.svg';
import './App.css';

class Container extends React.Component {
  constructor(props){
  super(props)
  // this.state={count:99}
  this.state = {}
  this.state.count = 1;
  this.state.dog = "cumlord";
  this.incrementCount = this.incrementCount.bind(this)

  }
  incrementCount(){
    // the : is used for setState as it's a special thing. Telling something else to set its state
    // so we use the object syntax of :, not =
  this.setState({count:this.state.count+1})
  }

  render (){
    const config = {count:69, dog:"tofu-chan"}
    // rest spread operator (SMOOTH) breaks apart the object for use
    const cookie1 = <Cookie {...config}></Cookie>;
    // setTimeout(this.incrementCount,1000)
  return (
    <div>
    <Cookie count = {this.state.count}
    dog = {this.state.dog}>
    </Cookie>

    <Cookie
    onClick={this.incrementCount} count = {420} dog = {"sweet potato"}>
    </Cookie>
    {
      cookie1
    }
    <Biscuit
    count = {777}>
    </Biscuit>
    </div>
  )}

}
export default Container;

// how does this props count know where to read "count" from? the name "props" apparantly doesn't matter, so how
// can it differentiate? Jake the Dog says it all to do with scope

class Cookie extends React.Component {
  constructor(props){
  super(props)
  }
  render (){
    console.log(this.props)
  return (
    <div className="cookie">
     <p> count is {this.props.count}, s o f t b o i is {this.props.dog}</p>
     <button onClick={this.props.onClick}>Click me HARDER</button>
    </div>
  )}

}

class Biscuit extends React.Component {
  constructor(props){
  super(props)
  }
  render (){
  return (
    <div className="biscuit">
     <p> count is {this.props.count}</p>
    </div>
  )}

}

