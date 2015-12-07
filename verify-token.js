#!/usr/bin/env node
const jwt = require('jsonwebtoken');
const program = require('commander');

const SECRET = 'interNal_Secret'; // secret we want to use, must be same for gen/verify

program
  .version('0.0.1')
  .option('-t --token <token string>', 'provide token string')
  .parse(process.argv);

if (program.token) {
  const result = jwt.verify(program.token, SECRET);
  console.log('Decoded token is: \n', result);
}