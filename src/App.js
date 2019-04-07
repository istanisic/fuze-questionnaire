import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionList from './components/QuestionList/QuestionList';
import NewQuestion from './components/NewQuestion/NewQuestion';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (label, options) {
    const newQuestions = this.state.questions.slice();
    newQuestions.push({label: label, options: options});
    this.setState({
      questions: newQuestions,
    });
  }

  render() {
    return (
      <div>
        <QuestionList questions={this.state.questions} />
        <NewQuestion onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
