const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config()
const {SV_PORT} = process.env

conn.sync({ alter: true }).then(() => {
  server.listen(SV_PORT, () => {
    console.log(`%s listening at ${SV_PORT}`); // eslint-disable-line no-console
  });
});
