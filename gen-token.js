#!/usr/bin/env node
const jwt = require('jsonwebtoken');
const program = require('commander');

const SECRET = 'interNal_Secret'; // secret we want to use
const EXPIRATION = 3600 * 24 * 365; // optional, here expires in a year

program
  .version('0.0.1')
  .option('-a --app-name <name>', 'provide app-name')
  .parse(process.argv);

if (program.appName) {
  const data = {app: program.appName}; // you can fillin other fields into the token.
  const token = jwt.sign(data, SECRET, {expiresIn: EXPIRATION}); // expiration is optional
  console.log(`Token is "${token}".`);
}
