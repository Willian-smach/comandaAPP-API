import {model, Schema} from 'mongoose';

export const Product = model('Product', new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imagePath: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	ingredients: { // criando uma "coluna" que recebe um array
		required: true,
		type: [{
			name: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		}]
	},
	category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category', // referenciando o id de uma categoria pelo modulo da mesma
	}
}));



