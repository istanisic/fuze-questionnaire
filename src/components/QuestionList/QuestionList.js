import React from 'react';
import './QuestionList.css';
import Question from '../Question/Question';

class QuestionList extends React.Component {
  render() {
    return (
      <div className="QuestionList">
      <h1>Questionnaire Preview</h1>
        {
          this.props.questions.map(question => {
            return <Question label={question.label} options={question.options} />;
          })
        }
      </div>
    );
  }
}

export default QuestionList;
