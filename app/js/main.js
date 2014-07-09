/* global require, Modernizr, app, ui, jquery, remfill */
require(['app', 'ui', 'jquery'], function (app, ui, $) {
    'use strict';
 	    
	    if (Modernizr.canvas) {
	       /* console.log('Canvas is present!');*/
	    }

	   if ($('html.lt-ie9').size()) {
	    	require(['remfill'], function(REMfill) {
	        	console.log('remfill is loaded');
	    	});
	    }

	    app.init();
	    ui.createUI();
       

});