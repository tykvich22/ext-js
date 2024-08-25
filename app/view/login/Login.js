Ext.define('MyApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: ['Ext.form.Panel'],

	bodyPadding: 10,
	title: 'Авторизация',
	closable: false,
	autoShow: true,

	items: [
		{
			xtype: 'form',
			bodyPadding: 10,
			defaults: {
				xtype: 'textfield',
				anchor: '100%',
				labelWidth: 90,
			},
			items: [
				{
					xtype: 'textfield',
					fieldLabel: 'Логин',
					name: 'username',
					allowBlank: false,
				},
				{
					xtype: 'textfield',
					fieldLabel: 'Пароль',
					name: 'password',
					inputType: 'password',
					allowBlank: false,
				},
			],
			buttons: [
				{
					text: 'Вход',
					formBind: true,
					handler: function (button) {
						const form = button.up('form').getForm();

						if (form.isValid()) {
							const values = form.getValues();

							if (values.username === 'admin' && values.password === 'padmin') {
								Ext.Msg.alert('Успех!', 'Вы успешно авторизовались');
								button.up('window').close();

								Ext.create('Ext.container.Viewport', {
									layout: 'fit',
									items: [
										{
											xtype: 'app-main',
										},
									],
								});
							} else {
								Ext.Msg.alert('Ошибка!', 'Неверный логин или пароль');
							}
						} else {
							Ext.Msg.alert('Ошибка');
						}
					},
				},
			],
		},
	],
});
