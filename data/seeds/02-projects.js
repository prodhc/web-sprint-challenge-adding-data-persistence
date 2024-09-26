exports.seed = function (knex) {
	return knex('projects').insert([
		{
			project_name: 'create website',
			project_description: 'create both the frontend and backend of a web app',
			project_completed: 0
		}
	]);
};