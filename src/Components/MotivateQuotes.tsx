import React from 'react';

type MotivateQuotesProps = {
  mood: string;
};

const MotivateQuotes: React.FC<MotivateQuotesProps> = ({ mood }) => {
  let quote = '';

  if (mood === 'Very Happy') {
    quote = "Amazing! You're doing great!";
  } else if (mood === 'Happy') {
    quote = "Awesome! Keep the momentum going!";
  } else if (mood === 'Neutral') {
    quote = "Find things to do that you love. Uplift your spirits.";
  } else if (mood === 'Sad') {
    quote = "Never believe in bad days, there are only bad moments.";
  } else if (mood === 'Very Sad') {
    quote = "You are incredible. Never give up, you are the best.";
  }

  return (
    <div>
      <h2>Motivational Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default MotivateQuotes;
