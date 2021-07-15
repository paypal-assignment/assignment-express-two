const express = require('express');
const app = express();

// app.use((req, res, next) => {
//   console.log('first respond');
//   next();
// });
// app.use((req, res, next) => {
//   console.log('second respond');
// });
app.use('/users', (req, res, next) => {
  res.send('<h2>message from users</h2>');
  next();
});
app.use('/', (req, res, next) => {
  res.send('<h1>Home Page</h1>');
});

app.listen(3000);
