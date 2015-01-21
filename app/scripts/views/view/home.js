define([
	'backbone',
	'communicator',
	'hbs!tmpl/view/home'
], function(Backbone, Communicator, homeTemplate){
	var HomeView = Backbone.Marionette.ItemView.extend({
		template : homeTemplate,
		onRender: function () {
			// Get rid of that pesky wrapping-div.
			// Assumes 1 child element present in template.
			this.$el = this.$el.children();
			// Unwrap the element to prevent infinitely
			// nesting elements during re-render.
			this.$el.unwrap();
			this.setElement(this.$el);
		}
	});

	return HomeView;
});
