// server.js
const express = require('express');
const path = require('path');

const app = express();
const STATIC_DIR = process.env.STATIC_DIR || path.join(__dirname, 'out'); // ganti ke folder kamu
const PORT = process.env.PORT || 3000;

app.use(express.static(STATIC_DIR, { maxAge: '1h', extensions: ['html'] }));

// SPA fallback (hapus kalau bukan SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serving ${STATIC_DIR} on port ${PORT}`);
});