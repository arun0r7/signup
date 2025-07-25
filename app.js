const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', authRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
