/* global require, Modernizr, app, ui */
require(['app', 'ui' ], function (app, ui) {
    'use strict';
 	    
	    if (Modernizr.canvas) {
	       /* console.log('Canvas is present!');*/
	    }

	    app.init();
	    ui.createUI();
       
});