const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.post();

server.post();

server.get();

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());
server.use(cors);

module.exports = server;