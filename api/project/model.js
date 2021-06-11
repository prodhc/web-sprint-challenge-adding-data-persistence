// build your `Project` model here
const db = require('../../data/dbConfig');

function getAllProjects() {
	return db('projects');
}

function createProject(createProject) {
	return db('projects');
}

module.exports = { getAllProjects, createProject };