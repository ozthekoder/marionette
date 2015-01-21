define([
	'backbone',
	'communicator',
	'regionManager',
	'views/view/header',
	'views/view/menu',
],
function( Backbone, Communicator, regionManager, headerView, menuView) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add initializers here */
	App.addInitializer( function () {
		//document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");

		var headerRegion = Communicator.reqres.request('RM:getRegion', 'header');
		headerRegion.show(new headerView());

		var menuRegion = Communicator.reqres.request('RM:getRegion', 'menu');
		menuRegion.show(new menuView());
	});

	return App;
});
