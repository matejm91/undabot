const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express()
const port = 3001

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/contact', (req, res) => {
  const errors = {};
  if (!req.body.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(req.body.email)) {
    errors.email = 'Invalid email address';
  }

  if (!req.body.textarea) {
    errors.textarea = 'Required';
  } else if (req.body.textarea.trim().length <= 30) {
    errors.textarea = 'Message too short';
  }
            
  if (errors.hasOwnProperty('email') || errors.hasOwnProperty('textarea')) {
    res.status(422).send(errors);
  } else {
    res.status(200).send('Your message has been sent!');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});