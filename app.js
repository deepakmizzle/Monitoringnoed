const express = require('express');
const app = express();
const port = 3000;

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route for the metrics endpoint
app.get('/metrics', (req, res) => {
  // Print a message to the console whenever this endpoint is accessed
  console.log('Hello Monitoring: Metrics endpoint is accessed!');
  res.send('Metrics endpoint is up!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

