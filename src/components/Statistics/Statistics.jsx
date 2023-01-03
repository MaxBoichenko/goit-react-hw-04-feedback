export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage = '0',
}) => {
  return (
    <ul>
      <li> Good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>Positive feedback: {positivePercentage}% </li>
    </ul>
  );
};
