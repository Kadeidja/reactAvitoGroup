import React, { useState } from 'react';

function Showquestion ({defaultsData, updateFormData }) {
  const [questionValue, setQuestionValue] = useState('');

  const handleQuestionBox = (e) => {
    const newValue = e.target.value;
    setQuestionValue(newValue);
    updateFormData(defaultsData.questionttl, newValue);
  }
  

  return (
    <div className="showquestion">
      <div key={defaultsData.questionid}>
        <div>
          <label>{defaultsData.askedquestions}</label>
          <p>{defaultsData.addinfo}</p>
        </div>
        {defaultsData.answersquestion.map((answersolo, index) => (
          <div key={index}>
            <label htmlFor={answersolo.questionid}>
              <input
                onChange={handleQuestionBox}
                type="radio"
                name="answer"
                value={answersolo}
                id={answersolo.questionid}
              />
              {answersolo}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showquestion;