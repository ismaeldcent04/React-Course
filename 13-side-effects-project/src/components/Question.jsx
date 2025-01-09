import questions from "../questions";
import { Answers } from "./Answers";
import { QuestionTimer } from "./QuestionTimer";

export const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2> {questionText}</h2>
      <Answers
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        answers={answers}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};
