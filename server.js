const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

const source = process.env.ATLAS_CONNECTION;
mongoose.connect(source, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once('open', () => {
      console.log("Connected to Mongoose Quiz DB.");
});

const Routes = require('./Routes/routes');
app.use('/api', Routes);

const PORT = process.env.PORT || 7888;
app.listen(PORT, () => {
      console.log(`Successfully served on port: ${PORT}.`);
})

