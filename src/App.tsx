import React, {useState} from 'react';
import MoodInput from './Components/MoodInput';
import DailyGoalsInput from './Components/DailyGoalsInput';
import MotivateQuotes from './Components/MotivateQuotes';
import Header from './Components/Header';


const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');

  return (
    <>
      <Header/>
      <MoodInput setMood={setMood}/>
      <DailyGoalsInput/>
      <MotivateQuotes mood={mood}/>
    </>
  );
};

export default App;
