import { calculateInvestmentResults, formatter } from "../util/investment";

export const Results = ({ input }) => {
  const annualData = calculateInvestmentResults(input);
  const initialInvestment =
    annualData[0]?.valueEndOfYear -
    annualData[0]?.interest -
    annualData[0]?.annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmounInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmounInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
