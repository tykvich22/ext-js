Ext.define('MyApp.store.Products', {
	extend: 'Ext.data.Store',
	alias: 'store.products',

	model: 'MyApp.model.Product',
	proxy: {
		type: 'memory',
		enablePaging: true,
	},

	data: [
		{
			id: 1,
			name: 'Товар 1',
			description: 'Кот',
			price: 10.5,
			quantity: 5,
		},
		{
			id: 2,
			name: 'Товар 2',
			description: 'Собака',
			price: 15.0,
			quantity: 0,
		},
		{
			id: 3,
			name: 'Товар 3',
			description: 'Ноутбук ThinkPad T460',
			price: 7.3,
			quantity: 10,
		},
		{
			id: 4,
			name: 'Товар 4',
			description: 'Клавиатура',
			price: 20.5,
			quantity: 3,
		},
	],
});
