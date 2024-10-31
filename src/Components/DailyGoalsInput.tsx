import React, { useState } from 'react';

type Goal = {
  text: string;
  completed: boolean;
};

const DailyGoalsInput: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalText, setGoalText] = useState<string>('');

  const addGoal = () => {
    if (goalText.trim() !== '') {
      const newGoal: Goal = { text: goalText, completed: false };
      setGoals([...goals, newGoal]);
      setGoalText('');
    }
  };

  const toggleGoalCompletion = (index: number) => {
    const newGoals = goals.map((goal, i) => {
      if (i === index) {
        return { ...goal, completed: !goal.completed };
      }
      return goal;
    });
    setGoals(newGoals);
  };

  return (
    <div className="daily-goals-container">
      <h2 className="daily-goals">Daily Goals</h2>
      <input
        type="text"
        value={goalText}
        onChange={(e) => setGoalText(e.target.value)}
        placeholder="Write a goal"
      />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoalCompletion(index)}
            />
            <span className={goal.completed ? 'completed' : ''}>{goal.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyGoalsInput;
