import React from 'react';

type MoodInputProps = {
  setMood: React.Dispatch<React.SetStateAction<string>>;
};

const MoodInput: React.FC<MoodInputProps> = ({ setMood }) => {
  const moods = ['Very Happy', 'Happy', 'Neutral', 'Sad', 'Very Sad'];

  return (
    <div>
      <h2>Select your mood:</h2>
      <div>
        {moods.map((mood) => (
          <button key={mood} onClick={() => setMood(mood)}>
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodInput;
