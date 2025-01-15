const express = require('express');
require('dotenv').config();

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
