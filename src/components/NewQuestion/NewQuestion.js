import React from 'react';
import './NewQuestion.css';
// import DeleteButton from '../DeleteButton/DeleteButton';

class NewQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      label: '',
      options: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.target.id === "label" ? this.setState({label: e.target.value}) : this.setState({options: e.target.value});
  }

  handleClick = (e) => {
    // e.preventDefault();
    this.props.onClick(this.state.label, this.state.options.replace(/\s*,\s*/g, ",").split(','));
    this.setState({label: '', options: []});
  }

  render() {
    return (
      <div className="NewQuestion">
        <p><strong>Add a M/C question:</strong></p>
        <textarea rows="2" id="label" type="text" value={this.state.label} onChange={this.handleChange} placeholder="What is your favourite programming language?" />
        <textarea rows="4" id="options" type="text" value={this.state.options} onChange={this.handleChange} placeholder="Enter your options separated by a comma. i.e Java, PHP, C, C++" />
        <a href="#" class="btn btn-primary" onClick={this.handleClick}>
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          <span><strong>Add</strong></span>
        </a>
      </div>
    );
  }
}

export default NewQuestion;
