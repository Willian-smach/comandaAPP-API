import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express();

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // Devolve arquivos estaticos acessados pelo usuario
		app.use(express.json());
		app.use(router);

		app.listen(3001, () => {
			console.log('Servidor conectado!!');
		});
	})
	.catch(() => console.log('Erro ao conectar no mongo'));
