define([
	'backbone',
	'hbs!tmpl/layout/wrapper_tmpl'
],
function( Backbone, WrapperTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.LayoutView.extend({

		initialize: function() {
			console.log("initialize a Wrapper Layout");
		},
		el: 'body',

    	template: WrapperTmpl,

    	regions: {
			'header' : '#header ',
			'menu' : '#menu ',
			'content' : '#content '
		},
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

});
