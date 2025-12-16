const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Simple request logger
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.path);
  next();
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Style server listening on ${port}`));
