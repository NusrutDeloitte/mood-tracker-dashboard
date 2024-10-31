import React from 'react';

type MoodInputProps = {
  //React.dispath is a type provided by react.  It represents a function that can be used to dispatch an action or update state.
  setMood: React.Dispatch<React.SetStateAction<string>>;
  //React.SetStateAction is a type provided by react.  It represents a function that takes a previous state and returns a new state.
};


function MoodInput(props: MoodInputProps) {
  const { setMood } = props;
  const moods: string[] = ['Very Happy', 'Happy', 'Neutral', 'Sad', 'Very Sad'];

  const handleMoodClick = (mood: string) => {
    setMood(mood);

    if (mood === 'Very Happy') {
      document.body.style.backgroundColor = 'pink';
    } else if (mood === 'Happy') {
      document.body.style.backgroundColor = 'yellow';
    } else if (mood === 'Neutral') {
      document.body.style.backgroundColor = 'lightgray';
    } else if (mood === 'Sad') {
      document.body.style.backgroundColor = 'lightblue';
    } else if (mood === 'Very Sad') {
      document.body.style.backgroundColor = 'lightcoral';
    } else {
      document.body.style.backgroundColor = '';
    }
  };

  return (
    <div className="mood-input">
      <h2 className="mood-heading">Select your mood:</h2>
      <div className="mood-buttons">
        {moods.map((mood) => (
          <button key={mood} onClick={() => handleMoodClick(mood)}>
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodInput;
