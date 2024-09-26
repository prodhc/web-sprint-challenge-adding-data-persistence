exports.seed = function (knex) {
	return knex('resources').insert([
		{
			resource_name: 'vscode',
			resource_description: 'code writing software'
		},
		{
			resource_name: 'css cheatsheet',
			resource_description: 'for all the great styles'
		}
	]);
};