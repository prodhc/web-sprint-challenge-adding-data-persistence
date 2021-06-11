// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAllResources() {
	return db('resources');
}

function createResource(createdResource) {
	return db('resources');
}

module.exports = { getAllResources, createResource };