Ext.define('MyApp.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',

	title: 'Главное окно',

	requires: ['MyApp.view.main.List'],

	items: [
		{
			xtype: 'container',
			padding: 10,
			items: [
				{
					xtype: 'button',
					text: 'Товары',
					margin: '0 10 0 0',
					handler: function (button) {
						const mainPanel = button.up('app-main');

						const tabPanel = mainPanel.down('tabpanel');

						tabPanel.add({
							closable: true,
							title: 'Товары',
							items: [
								{
									xtype: 'textfield',
									fieldLabel: 'Поиск по ID',
									enableKeyEvents: true,
									listeners: {
										keyup: function (field, e) {
											if (e.getKey() === Ext.event.Event.ENTER) {
												const grid = field.up('panel').down('grid');

												if (grid) {
													const store = grid.getStore();
													const value = field.getValue();

													store.clearFilter();

													if (value) {
														store.addFilter({
															property: 'id',
															value: parseInt(value, 10),
															exactMatch: true,
														});
													}
												}
											}
										},
									},
								},
								{
									xtype: 'textfield',
									fieldLabel: 'Поиск по описанию',
									enableKeyEvents: true,
									listeners: {
										keyup: function (field, e) {
											if (e.getKey() === Ext.event.Event.ENTER) {
												const grid = field.up('panel').down('grid');

												if (grid) {
													const store = grid.getStore();
													const value = field.getValue();

													store.clearFilter();

													if (value) {
														store.addFilter({
															property: 'description',
															value: value,
															anyMatch: true,
															caseSensitive: false,
														});
													}
												}
											}
										},
									},
								},

								{
									xtype: 'mainlist',
								},
							],
						});
					},
				},
				{
					xtype: 'button',
					text: 'Выход',
					handler: function () {
						const appMain = Ext.ComponentQuery.query('app-main')[0];

						if (appMain) {
							appMain.destroy();
						}
						Ext.create('Ext.container.Viewport', {
							layout: 'fit',
							items: [
								{
									xtype: 'login',
								},
							],
						});
					},
				},
			],
		},
		{
			xtype: 'tabpanel',
			flex: 1,
			items: [
				{
					closable: true,
					title: 'Начальная вкладка',
					html: 'Создайте новый список товаров!',
				},
			],
		},
	],
});
