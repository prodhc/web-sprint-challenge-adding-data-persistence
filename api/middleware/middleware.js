const Task = require('../task/model');
const Project = require('../project/model');
const Resource = require('../resource/model');

function validateResource(req, res, next) {
	console.log('validateResource Working');
	next();
}

function validateProject(req, res, next) {
	console.log('validateProject Working');
	next();
}

function validateTask(req, res, next) {
	console.log('validateTask Working');
	next();
}

module.exports = { validateResource, validateProject, validateTask };