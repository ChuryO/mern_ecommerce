import express from 'express';
import dotenv from 'dotenv';
import color from 'colors';
import connectDb from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDb();

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'development';
const app = express();
const runInfo = `⚡️[server]:Server running in ${ ENV } mode on port ${ PORT }`.yellow.bold;

app.get('/', ( req, res ) => {
	res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, console.log(runInfo));


