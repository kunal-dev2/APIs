
const express = require('express');
const app = express();

const data = require('./data.json');

// app.get('/api/data', (req, res) => {
//   res.json(data);
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


app.use((req, res, next) => {
  req.headers = {};
  next();
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  res.send('API Working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
