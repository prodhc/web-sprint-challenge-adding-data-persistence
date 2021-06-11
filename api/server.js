// build your server here and require it from index.js
const express = require('express');
const server = express();
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

server.use(express.json());

server.use('/api/project', projectRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);

server.use((err, req, res, next) => {
	console.log();
	res.status(err.status || 500).json({
		custom: "Sorry the server ain't doing too hot :(",
		message: err.message,
		stack: err.stack
	});
});

module.exports = server;