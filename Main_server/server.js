// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const JobRoutes = require('./routes/JobRoutes');
const OrganizationRoutes = require("./routes/OrganizationRoutes")

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
// Routes
app.use('/api/Jobs', JobRoutes);
app.use('/api/Organization',OrganizationRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(port, () => {
    console.log(`Connected to DB & listning on port: ${port}`);
  });
})
.catch((error) => {
  console.log(error);
})
