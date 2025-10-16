const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Main App!');
});

app.listen(PORT, () => {
  console.log(`Main app running on port ${PORT}`);
});