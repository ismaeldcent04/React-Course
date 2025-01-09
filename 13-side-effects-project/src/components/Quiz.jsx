import { useCallback, useRef, useState } from "react";
import questions from "../questions";
import quizComplete from "../assets/quiz-complete.png";
import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";
import { Question } from "./Question";

export const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setAnswerState("answered");
      setUserAnswers((prevValue) => {
        return [...prevValue, answer];
      });

      setTimeout(() => {
        if (setAnswerState === questions[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <>
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          questionText={questions[activeQuestionIndex].text}
          answers={questions[activeQuestionIndex].answers}
          onSelectAnswer={handleSelectAnswer}
          answerState={answerState}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </>
  );
};
