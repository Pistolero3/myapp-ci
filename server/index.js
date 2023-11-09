const express = require('express');
const path = require('path');

const app = express();
const staticsPath = path.resolve(__dirname, './public');

app.use('/', express.static(staticsPath));

const port = +process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
