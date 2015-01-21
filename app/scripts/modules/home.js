define([
	'application',
	'communicator',
	'views/view/home'
], function(App, Communicator, HomeView){
	'use strict';

	var homeModule = App.module('home', function(Module, App, Backbone, Marionette, $, _) {
		this.startWithParent = false;
	});

	homeModule.addInitializer(function(){
		var contentRegion = Communicator.reqres.request('RM:getRegion', 'content');
		contentRegion.show(new HomeView());
	});
});
