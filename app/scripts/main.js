require([
	'backbone',
	'application',
	'routers/router',
	'modules/home',
	'modules/login'
],
function ( Backbone, App, Router, HomeModule, LoginModule ) {
    'use strict';
	var router = new Router();
	App.start();
	Backbone.history.start();
});
