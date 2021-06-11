// build your `Task` model here
const db = require('../../data/dbConfig');

function getAllTasks() {
	return db('tasks');
}

function validateTask(createdTask) {
	return db('tasks');
}

module.exports = { getAllTasks, validateTask };