import React, {useState} from 'react';
import MoodInput from './Components/MoodInput';
import DailyGoalsInput from './Components/DailyGoalsInput';
import MotivateQuotes from './Components/MotivateQuotes';

const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');

  return (
    <div>
      <h1>Mood Tracker Dashboard</h1>
      <MoodInput setMood={setMood}/>
      <DailyGoalsInput/>
      <MotivateQuotes mood={mood}/>
    </div>
  );
};

export default App;
