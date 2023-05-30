const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = parseInt(process.env.ATT_DB_PORT || '5432')
const { Client } = require('pg');
const client = new Client({
 host: process.env.ATT_DB_USER,
 port,
 database: process.env.ATT_DB_NAME,
 user : process.env.ATT_DB_USER,
 password : process.env.ATT_DB_PASSWORD,
});
client.connect();


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});




module.exports = app;