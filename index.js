const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

//connect database and env
dotenv.config();
connectDB();

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

//sever start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));