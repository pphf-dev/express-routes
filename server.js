const express = require('express');
const bodyParser = require('body-parser');
const locationRouter = require('./routes/locationRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/locations', locationRouter);

app.get('/', (req, res) => {
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
    <body>
      <form action='/locations' method='post'>
      <label for='location'>Add a location: 
      <input type='text' name='location' />
      </label>
      <button type='submit'>Submit</button>
      </form>
    </body>
    </html>
  `);
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});