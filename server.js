const express = require('express');
const notFoundFallBack = require('connect-history-api-fallback');

const app = express();
app.use(notFoundFallBack());
app.use(express.static('dist'));
const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('App started');
});

