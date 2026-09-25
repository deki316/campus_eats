const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express(); // 1. Created here correctly!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, client-side JS)
app.use(express.static(path.join(__dirname, 'public')));

// DELETED THE DUPLICATE APP INITIALIZATION FROM HERE
const PORT = process.env.PORT || 3000;

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Campus Eats running at http://localhost:${PORT}`);
});
