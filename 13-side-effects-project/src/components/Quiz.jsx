import { useState } from "react";
import questions from "../questions";
import quizComplete from "../assets/quiz-complete.png";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = (answer) => {
    setUserAnswers((prevValue) => {
      return [...prevValue, answer];
    });
  };

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2> {questions[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {questions[activeQuestionIndex].answers.map((answer) => {
              return (
                <li key={answer} className="answer">
                  <button onClick={() => handleSelectAnswer(answer)}>
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
