import { useState } from "react";
import { InvestmentForm } from "./InvestmentForm";
import { Results } from "./Results";

export const Main = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 20000,
    expectedReturn: 10,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  const handleUserInput = (e) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [e.target.name]: +e.target.value };
    });
  };
  return (
    <main>
      <InvestmentForm userInput={userInput} handleChange={handleUserInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </main>
  );
};
