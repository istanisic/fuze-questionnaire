import React from 'react';
import './NewQuestion.css';
// import DeleteButton from '../DeleteButton/DeleteButton';

class NewQuestion extends React.Component {

  handleClick = (e) => {
    // e.preventDefault();
    let label = document.getElementById("label").value;
    let options = document.getElementById("options").value;
    this.props.onClick(label, options.replace(/\s*,\s*/g, ",").split(','));
    document.getElementById("label").value = "";
    document.getElementById("options").value = "";
  }

  render() {
    return (
      <div className="NewQuestion">
        <p><strong>Add a M/C question:</strong></p>
        <textarea rows="2" id="label" type="text" placeholder="What is your favourite programming language?" />
        <textarea rows="4" id="options" type="text" placeholder="Enter your options separated by a comma. i.e Java, PHP, C, C++" />
        <a href="#" class="btn btn-primary" onClick={this.handleClick}>
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          <span><strong>Add</strong></span>
        </a>
      </div>
    );
  }
}

export default NewQuestion;
