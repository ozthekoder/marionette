define([
	'application',
	'communicator',
	'views/view/login'
], function(App, Communicator, LoginView){
	'use strict';

	var loginModule = App.module('login',function(Module, App, Backbone, Marionette, $, _) {
		this.startWithParent = false;
	});

	loginModule.addInitializer(function(){
		var contentRegion = Communicator.reqres.request('RM:getRegion', 'content');
		contentRegion.show(new LoginView());
	});
});
