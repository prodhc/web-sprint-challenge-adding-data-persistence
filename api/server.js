const express = require('express');
const server = express();
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');
const { logger } = require('./middleware/middleware');

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);
server.use(logger);

server.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		custom: "Uh on something is up with the sever!",
		message: err.message,
		stack: err.stack
	});
});

module.exports = server;