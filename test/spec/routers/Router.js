(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/router'
		],
		function( router ) {

			describe('router router', function () {

				it('should be an instance of Router Router', function () {
					var router = new router();
					expect( router ).to.be.an.instanceof( router );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
