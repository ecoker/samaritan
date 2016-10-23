import React, { Component, PropTypes } from 'react';
 function incrementHandler(add, int) {
  if(add) {
    int = int+1;
  } else {
    int = (int>0) ? int-1 : 0;
  }
  return int;
}
class Incrementer extends React.Component {
  constructor(props){
    super(props);
    var int = (this.props.initialCount) ? parseInt(this.props.initialCount) : 0; 
    this.state = {
      clicks: int
    };
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }
  add(ev){
    ev.preventDefault();
    this.setState({
      clicks: incrementHandler(true, this.state.clicks)
    })
    if (this.props.handleClicks) this.props.handleClicks(true);
  }
  sub(ev){
    ev.preventDefault();
    this.setState({
      clicks: incrementHandler(false, this.state.clicks)
    })
    if (this.props.handleClicks && this.state.clicks >0) this.props.handleClicks(false);
  }
  render(){
    return <div className={`Incrementer ${this.props.additionalClasses || ''}`}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <span className="counter">
                    <a className="increment sub" onClick={ this.sub }> - </a>        
                    <span className="icon"></span>
                    <a className="increment add" onClick={ this.add }> + </a>
                </span>
                <input readOnly type="number" name={this.props.name} value={this.state.clicks} />
           </div>
  }
}

export default class BasicInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      Clicks: 1
    };
    this.handleClicks = this.handleClicks.bind(this);
  }
  handleClicks(add) {
    this.setState({
      Clicks:  incrementHandler(add, this.state.Clicks)
    })
  }
  incrementHandler() {
  
}
  render(){
    return (
      <div className="family">
        <h1>Family Members: { this.state.Clicks }</h1>
        <div className="row switch">
            <a href="" className="button columns small-6">Individual</a>
            <a href="" className="button columns small-6">Family</a>
        </div>
        <div className="row">
            <Incrementer name="adultCount" initialCount="1" label="Adults" additionalClasses="adult columns small-6" handleClicks={ this.handleClicks } />
            <Incrementer name="childCount" initialCount="0" label="Children" additionalClasses="child columns small-6" handleClicks={ this.handleClicks } />
        </div>
      </div>
    )
  } 
}