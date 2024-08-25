Ext.define('MyApp.Application', {
	extend: 'Ext.app.Application',

	name: 'MyApp',

	launch: function () {
		Ext.create('MyApp.view.viewport.Viewport', {
			renderTo: Ext.getBody(),
		});
	},

	onAppUpdate: function () {
		Ext.Msg.confirm(
			'Application Update',
			'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	},
});
