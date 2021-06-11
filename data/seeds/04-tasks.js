exports.seed = function (knex) {
	return knex('tasks').insert([
		{
			task_description: 'sructure website',
			task_notes: 'use design apps',
			task_completed: 1,
			project_id: 1
		},
		{
			task_description: 'build front end',
            task_notes: 'use react',
			task_completed: 0,
			project_id: 1
		},
		{
			task_description: 'build backend',
			task_completed: 0,
			project_id: 1
		}
	]);
};