import React from 'react';
import './Option.css';

class Option extends React.Component {

  render() {
    return (
      <div className="Option">
        <input type="radio" id={this.props.option} name={this.props.option} value={this.props.option} />
        <label for={this.props.option}>{this.props.option}</label>
      </div>
    );
  }
}

export default Option;
