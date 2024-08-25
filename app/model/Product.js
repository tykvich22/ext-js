Ext.define('MyApp.model.Product', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'name', type: 'string' },
		{ description: 'description', type: 'string' },
		{ price: 'price', type: 'float' },
		{ quantity: 'quantity', type: 'int' },
	],
});
