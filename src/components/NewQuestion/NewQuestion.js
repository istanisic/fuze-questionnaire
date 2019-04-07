import React from 'react';
import './NewQuestion.css';
// import DeleteButton from '../DeleteButton/DeleteButton';

class NewQuestion extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    let label = document.getElementById("label").value;
    let options = document.getElementById("options").value;
    this.props.onClick(label, options.split(', '));
  }

  render() {
    return (
      <div className="NewQuestion">
        <label>Add a new question:</label>
        <textarea rows="2" id="label" type="text" placeholder="What is your favourite programming language?" />
        <textarea rows="4" id="options" type="text" placeholder="Enter your options separated by a comma. i.e Java, PHP, C, C++" />
        <a href="#" class="btn btn-primary a-btn-slide-text" onClick={this.handleClick}>
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          <span><strong>Add</strong></span>
        </a>
      </div>
    );
  }
}

export default NewQuestion;
