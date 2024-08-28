// src/App.js
import React from 'react';
import HabitList from './components/HabitList';
import AddHabit from './components/AddHabit';

const App = () => {
  return (
    <div>
      <AddHabit />
      <HabitList />
    </div>
  );
};

export default App;
