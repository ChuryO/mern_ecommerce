import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();
import Product from '../models/productModel.js';

/**
 * @desc 	Fetch all products
 * @route 	GET api/products
 * @access 	Public
 */
router.get('/', asyncHandler(async ( req, res ) => {
	const products = await Product.find({});
	res.json(products);
}));

/**
 * @desc 	Fetch single product
 * @route 	GET api/product/:id
 * @access 	Public
 */
router.get('/:id', asyncHandler(async ( req, res ) => {
	const id = req.params.id;
	try {
		const product = await Product.findById(id);
		res.json(product);
	} catch (e) {
		res.status(404).json({ message: `Product ${ id }: not found` });
	}
}));

export default router;