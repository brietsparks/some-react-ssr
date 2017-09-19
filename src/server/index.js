import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../app';

const server = express();

server.use(express.static("public"));

server.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="bundle.js" defer></script>
    </head>
    <body>
        <p>This was rendered on the server</p>
        <div id="app">${renderToString(<App />)}</div>
    </body>
    </html>
  `)
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');
});