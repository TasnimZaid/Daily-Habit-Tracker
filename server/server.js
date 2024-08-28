// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Habit = require('./models/Habit.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://tasnim:12345@cluster0.y3e5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {

});

app.get('/', (req, res) => {
  res.send('Welcome to the Daily Habit Tracker API');
});

app.post('/habits', async (req, res) => {
  const habit = new Habit(req.body);
  await habit.save();
  res.status(201).send(habit);
});

app.get('/habits', async (req, res) => {
  const habits = await Habit.find();
  res.send(habits);
});

app.put('/habits/:id', async (req, res) => {
  const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(habit);
});

app.delete('/habits/:id', async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.send({ message: 'Habit deleted' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
