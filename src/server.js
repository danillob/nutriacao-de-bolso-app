const app = require('./app');

app.listen(process.env.PORT, '0.0.0.0', function() {
  console.log('Listening on port ' + process.env.PORT)
});
