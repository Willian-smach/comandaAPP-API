import { Request, Response } from 'express';
import { Category } from '../../Category';

export async function createCategory(req: Request, res: Response){
	try{
		const {  icon, name } = req.body;

		if(!name){
			res.status(400).json({
				error: 'Nome é obrigatório'
			});
		}else{
			if(!icon){
				res.status(400).json({
					error: 'Icone é obrigatório'
				});
			}
		}

		const category = await Category.create({ icon, name });

		res.status(201).json(category);
	}catch (error){
		console.log(error);
		res.sendStatus(500);
	}
}
