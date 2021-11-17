const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 1000;


server.listen(port, () => console.log(`Server listening on:: ${port}`));