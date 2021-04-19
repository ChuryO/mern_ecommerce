import bcryptjs from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@admin.pl',
		password: bcryptjs.hashSync('admin', 10),
		isAdmin: true,
	},
	{
		name: 'Jhon Doe',
		email: 'jhon@user.pl',
		password: bcryptjs.hashSync('user', 10),
	},
	{
		name: 'Jane Doe',
		email: 'jane@user.pl',
		password: bcryptjs.hashSync('user', 10),
	},
];

export default users;