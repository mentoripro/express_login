// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(bodyParser.json());
app.use(cors())

// Load user data from data.json
const userData = require('./data.json');

app.post('/login', cors(), (req, res) => {
  const { login, password } = req.body;

  const user = userData.find((user) => user.login === login && user.password === password);

  if (user) {
    res.json({ success: true, component: user.component });
  } else {
    res.json({ success: false, message: 'Invalid login or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
