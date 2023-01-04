import { useState } from 'react';

import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateObj = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevS => prevS + 1);
        break;
      case 'neutral':
        setNeutral(prevS => prevS + 1);
        break;
      case 'bad':
        setBad(prevS => prevS + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    return Object.values(stateObj).reduce((sum, a) => sum + a, 0);
  };

  const positivePercentage = () => {
    const result = Math.round((good / totalFeedback()) * 100);
    if (result) {
      return result;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateObj} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
