import express from 'express';
import os from 'os';

const app = express();

app.get('/', (req, res) => {
  res.json(`Response from ${os.hostname()} at ${new Date().toISOString()}`);
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
