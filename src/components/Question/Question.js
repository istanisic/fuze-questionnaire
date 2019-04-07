import React from 'react';
import './Question.css';
import Option from '../Option/Option';

class Question extends React.Component {

  render() {
    return (
      <div>
      <p>{this.props.label}</p>
      <div className="Question">
        {
          this.props.options.map(option => {
            return <Option label={this.props.label} option={option} />;
          })
        }
      </div>
      </div>
    );
  }
}

export default Question;
