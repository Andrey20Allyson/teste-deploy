const e = require("express");
const uuid = require('uuid');

const app = e();

app.get('/my-uuid', (_, res) => {
  res.json({
    message: `hello, this is your uuid ${uuid.v4()}`,
    timestamp: Date.now(),
  });
});

module.exports = app;