Ext.define('MyApp.view.main.List', {
	extend: 'Ext.grid.Panel',
	xtype: 'mainlist',
	itemId: 'myGrid',

	requires: ['MyApp.store.Products'],

	store: {
		type: 'products',
	},

	columns: [
		{ text: 'ID', dataIndex: 'id', flex: 1 },
		{
			text: 'Имя',
			dataIndex: 'name',
			flex: 1,
			renderer: function (value) {
				return '<a href="#"=>' + value + '</a>';
			},
		},
		{ text: 'Описание', dataIndex: 'description', flex: 2 },
		{ text: 'Цена', dataIndex: 'price', flex: 1 },
		{
			text: 'Кол-во',
			dataIndex: 'quantity',
			flex: 1,
			renderer: function (value) {
				if (value === 0) {
					return '<span style="background-color:red;">' + value + '</span>';
				}
				return value;
			},
		},
	],
	listeners: {
		cellclick: function (grid, td, cellIndex, record, tr, rowIndex, e) {
			if (grid.headerCt.getHeaderAtIndex(cellIndex).dataIndex === 'name') {
				const productWindow = Ext.create('MyApp.view.main.ProductForm', {
					record: record,
				});
				productWindow.show();
			}
		},
	},
});
