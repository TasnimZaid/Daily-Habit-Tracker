// src/components/HabitList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HabitList = () => {
  const [habits, setHabits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/habits')
      .then(response => setHabits(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteHabit = (id) => {
    axios.delete(`http://localhost:5000/habits/${id}`)
      .then(() => setHabits(habits.filter(habit => habit._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Daily Habit Tracker</h1>
      <input 
        type="text" 
        placeholder="Search habits..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {habits.filter(habit => habit.name.toLowerCase().includes(searchTerm.toLowerCase())).map(habit => (
          <li key={habit._id}>
            <h2>{habit.name}</h2>
            <p>{habit.description}</p>
            <button onClick={() => deleteHabit(habit._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
