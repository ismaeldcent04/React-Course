import { useState } from "react";

export const InvestmentForm = ({ userInput, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
};
