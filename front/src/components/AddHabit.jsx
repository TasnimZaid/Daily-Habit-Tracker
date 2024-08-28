// src/components/AddHabit.js
import React, { useState } from 'react';
import axios from 'axios';

const AddHabit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const addHabit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/habits', { name, description, category, tags: tags.split(',') })
      .then(() => {
        setName('');
        setDescription('');
        setCategory('');
        setTags('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={addHabit}>
      <input 
        type="text" 
        placeholder="Habit Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Tags (comma separated)" 
        value={tags} 
        onChange={(e) => setTags(e.target.value)} 
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabit;
