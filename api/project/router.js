// build your `/api/projects` router here
const express = require('express');
const { validateProject } = require('../middleware/middleware');

const Projects = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
	Projects.getAllProjects()
		.then(projects => {
			res.status(200).json(projects);
		})
		.catch(next);
});

router.post('/', validateProject, (req, res, next) => {
	Projects.createProject(req.body)
		.then(project => {
			res.status(200).json(project);
		})
		.catch(next);
});

module.exports = router;