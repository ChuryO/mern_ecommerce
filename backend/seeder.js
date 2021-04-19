import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import readline from 'readline';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUserId = createdUsers[0]._id;

		const sampleProduct = products.map(product => {
			return { ...product, user: adminUserId };
		});

		await Product.insertMany(sampleProduct);

		console.log('Data Imported'.green.inverse);
		process.exit();
	} catch (err) {
		console.error(`Data Not Imported: ${ err.message }`.red.inverse);
		process.exit(1);
	}
};


const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed'.red.inverse);
		process.exit();
	} catch (err) {
		console.error(`Data Not Destroyed: ${ err.message }`.red.inverse);
		process.exit(1);
	}
};
export default destroyData

if (process.argv[2] === '-d') {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question(`Are you sure? Y/N`.yellow.bold, answer => {
		if (answer.match(/^(yes|y)$/i)) {
			destroyData();
		} else {
			console.log('Destroying cancelled'.green.bold);
			process.exit(0);
		}
		rl.close();
	});
} else {
	importData();
}