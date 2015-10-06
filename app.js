/*eslint no-console: 0*/

'use strict';

let express = require('express'),
    app = express(),
    port = process.env.PORT || 11111;

app
    .use(express.static('static', { index: false }))
    .get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))
    .listen(11111, () => console.log(`Started at localhost:${port}`));
