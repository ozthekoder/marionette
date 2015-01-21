define([
	'backbone',
	'application'
],
function(Backbone, App){
    'use strict';
	var currentModule = null;
	var Router =  Backbone.Router.extend({
		routes: {
			'' : 'home',
			'home' : 'home',
			'login': 'login'
		},
		home : function(){
			if(currentModule) currentModule.stop();
			currentModule = App.module('home');
			currentModule.start();
		},
		login : function(){
			if(currentModule) currentModule.stop();
			currentModule = App.module('login');
			currentModule.start();
		}
	});

	return Router;
});
