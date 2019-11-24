import React, { useState } from 'react';
import './Clue.css';

const Clue = props => {
  const [reveal, setReveal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [answerReveal, setAnswerReveal] = useState(false);
  const { answer, question, value, id } = props.clue;
  const dailyDouble = id === props.dailyDouble;
  return (
    <div>
      <div className="clue-container">
        <div
          className={`clue value ${selected ? 'selected' : ''}`}
          onClick={() => {
            setReveal(true);
            setSelected(true);
          }}
        >
          {!dailyDouble ? (
            <h4 className={reveal ? 'text-hidden' : 'text-revealed'}>
              ${value || '0'}
            </h4>
          ) : (
            <h4
              className={`daily-double ${
                reveal ? 'text-hidden' : 'text-revealed'
              }`}
            >
              Daily Double
              <br />${value || '0'}
            </h4>
          )}
        </div>
      </div>
      <div
        className={`clue-text ${
          reveal || answerReveal ? 'text-revealed' : 'text-hidden'
        }`}
      >
        <p
          className={reveal && !answerReveal ? 'text-revealed' : 'text-hidden'}
        >
          {question}
        </p>
        <p className={answerReveal ? 'text-revealed' : 'text-hidden'}>
          {answer}
        </p>
        <button
          className="button"
          onClick={() => {
            answerReveal ? setAnswerReveal(false) : setAnswerReveal(true);
          }}
        >
          {answerReveal ? 'Hide Answer' : 'Show Answer'}
        </button>
        <button
          className="button"
          onClick={() => {
            setReveal(false);
            setAnswerReveal(false);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Clue;
