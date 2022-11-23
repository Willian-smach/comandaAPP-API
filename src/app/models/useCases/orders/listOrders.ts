import { Request, Response } from 'express';
import { Order } from '../../Order';

export async function listOrder(req: Request, res: Response){

	try {
		const products = await Order.find()
			.sort({createdAt: 1}) // MODO DE ORDENAR DO MAIS ANTIGO PARA O MAIS NOVO
			.populate('products.product'); //products.product campo/atributo do model order

		res.json(products);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
