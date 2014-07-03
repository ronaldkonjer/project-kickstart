/* global define, Modernizr,'jquery', 'fastclick', 'foundation', 'picturefill, */
/* jshint indent:4 */
define([
  'jquery',
  'modernizr',
  'fastclick',
  'foundation',
  ], function ($, Modernizr, FastClick) {
    'use strict';
    $(document).foundation({});
    console.log('foundation is called');

    var foundation = $(document).foundation({});
    console.log(foundation);

    //$('#myModal').foundation('reveal', 'open');

    var self = {};

    self.init = function init() {
        console.log('Core module initialised!');
    };

    console.log('Module ready');

    if (Modernizr.canvas) {
        console.log('Canvas!');
    }



    return self;
});



    

  