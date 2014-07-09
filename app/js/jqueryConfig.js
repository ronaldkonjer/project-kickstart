/* global define, $, owlCarousel */

define(['jquery', 'owlCarousel'], function($, owlCarousel) {
  'use strict';
  
  function init() {

    $(document).ready(function() {
      $("#owl-example").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true
      });
    });
  };

  return {
        init: init
    }
});

