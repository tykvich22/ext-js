Ext.define('MyApp.view.main.ProductForm', {
	extend: 'Ext.window.Window',
	xtype: 'productform',

	title: 'Карточка товара',
	modal: true,
	layout: 'fit',
	width: 400,

	store: {
		type: 'products',
	},

	items: [
		{
			xtype: 'form',
			padding: 10,
			defaults: {
				anchor: '100%',
				labelWidth: 120,
			},
			items: [
				{
					xtype: 'displayfield',
					fieldLabel: 'ID',
					name: 'id',
					readOnly: true,
				},
				{
					xtype: 'displayfield',
					fieldLabel: 'Имя',
					name: 'name',
					readOnly: true,
				},
				{
					xtype: 'displayfield',
					fieldLabel: 'Описание',
					name: 'description',
					readOnly: true,
				},
				{
					xtype: 'numberfield',
					fieldLabel: 'Цена',
					name: 'price',
					minValue: 0,
					allowBlank: false,
					validator: function (value) {
						return value >= 0
							? true
							: 'Цена должна быть неотрицательным числом';
					},
				},
				{
					xtype: 'numberfield',
					fieldLabel: 'Количество',
					name: 'quantity',
					minValue: 0,
					allowBlank: false,
					validator: function (value) {
						const numValue = Number(value);
						return Number(Number.isInteger(numValue))
							? true
							: 'Количество должно быть целым числом';
					},
				},
			],
		},
	],
	buttons: [
		{
			text: 'Сохранить',
			handler: function (button) {
				const window = button.up('window');
				const form = window.down('form');
				const record = window.record;
				const grid = Ext.ComponentQuery.query('#myGrid')[0];

				if (form.isValid()) {
					const formValues = form.getValues();
					const recordValues = record.getData();

					if (
						String(formValues.price) !== String(recordValues.price) ||
						String(formValues.quantity) !== String(recordValues.quantity)
					) {
						form.updateRecord(record);
						const store = grid.getStore();
						const gridRecord = store.getById(record.getId());

						if (gridRecord) {
							gridRecord.set(form.getValues());
						}

						Ext.Msg.alert('Сохранено', 'Изменения успешно сохранены.');
					} else {
						Ext.Msg.alert('Нет изменений', 'Данные не были изменены.');
					}
					window.close();
				} else {
					Ext.Msg.alert('Ошибка', 'Пожалуйста, исправьте ошибки.');
				}
			},
		},
		{
			text: 'Отмена',
			handler: function (button) {
				button.up('window').close();
			},
		},
	],

	listeners: {
		beforeshow: function (window) {
			const form = window.down('form');
			const record = window.record;

			if (record) {
				form.loadRecord(record);
			}
		},
	},
});
