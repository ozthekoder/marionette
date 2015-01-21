define([
	'backbone',
	'communicator',
	'hbs!tmpl/view/menu'
], function(Backbone, Communicator, menuTemplate){
	var MenuView = Backbone.Marionette.ItemView.extend({
		template : menuTemplate,
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

	return MenuView;
});
