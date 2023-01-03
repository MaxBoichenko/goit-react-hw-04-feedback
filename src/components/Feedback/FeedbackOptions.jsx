export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(option => {
    return (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });
};
