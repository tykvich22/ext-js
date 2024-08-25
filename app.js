Ext.application({
	name: 'MyApp',

	extend: 'MyApp.Application',

	requires: [
		'MyApp.view.viewport.Viewport',
		'MyApp.view.login.Login',
		'MyApp.view.main.Main',
	],
});
