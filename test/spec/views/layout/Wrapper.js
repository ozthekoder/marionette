(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/wrapper'
		],
		function( Wrapper ) {

			describe('Wrapper Layout', function () {

				it('should be an instance of Wrapper Layout', function () {
					var wrapper = new Wrapper();
					expect( wrapper ).to.be.an.instanceof( Wrapper );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );