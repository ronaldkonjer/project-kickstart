/* global requirejs */
requirejs.config({
    paths: {
        'handlebars': '../bower_components/handlebars/handlebars.runtime',
        'picturefill': '../bower_components/picturefill/picturefill',

         /* jQuery */
        'jquery': '../bower_components/foundation/js/vendor/jquery',

        /* Foundation total package */
        'foundation': '../bower_components/foundation/js/foundation.min',

        /* Foundation modules */
        'foundation.core': '../bower_components/foundation/js/foundation/foundation',
        'foundation.abide': '../bower_components/foundation/js/foundation/foundation.abide',
        'foundation.accordion': '../bower_components/foundation/js/foundation/foundation.accordion',
        'foundation.alert': '../bower_components/foundation/js/foundation/foundation.alert',
        'foundation.clearing': '../bower_components/foundation/js/foundation/foundation.clearing',
        'foundation.dropdown': '../bower_components/foundation/js/foundation/foundation.dropdown',
        'foundation.equalizer': '../bower_components/foundation/js/foundation/foundation.equalizer',
        'foundation.interchange': '../bower_components/foundation/js/foundation/foundation.interchange',
        'foundation.joyride': '../bower_components/foundation/js/foundation/foundation.joyride',
        'foundation.magellan': '../bower_components/foundation/js/foundation/foundation.magellan',
        'foundation.offcanvas': '../bower_components/foundation/js/foundation/foundation.offcanvas',
        'foundation.orbit': '../bower_components/foundation/js/foundation/foundation.orbit',
        'foundation.reveal': '../bower_components/foundation/js/foundation/foundation.reveal',
        'foundation.tab': '../bower_components/foundation/js/foundation/foundation.tab',
        'foundation.tooltip': '../bower_components/foundation/js/foundation/foundation.tooltip',
        'foundation.topbar': '../bower_components/foundation/js/foundation/foundation.topbar',

        /* Vendor Scripts */
        'jquery.cookie': '../bower_components/foundation/js/vendor/jquery.cookie',
        'fastclick': '../bower_components/foundation/js/vendor/fastclick',
        'modernizr': '../bower_components/foundation/js/vendor/modernizr',
        'placeholder': '../bower_components/foundation/js/vendor/placeholder'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'picturefill': {
            exports: 'Picturefill'
        },
         /* Foundation total package*/
        'foundation': {
         deps: [
            'jquery',
            'modernizr'
            ],
            exports: 'FoundationComplete'
        },
        /* Foundation modules*/
        'foundation.core': {
            deps: [
            'jquery',
            'modernizr'
            ],
            exports: 'Foundation'
        },
        'foundation.abide': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.accordion': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.alert': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.clearing': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.dropdown': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.equalizer': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.interchange': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.joyride': {
            deps: [
            'foundation.core',
            'jquery.cookie'
            ]
        },
        'foundation.magellan': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.offcanvas': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.orbit': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.reveal': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.tab': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.tooltip': {
            deps: [
            'foundation.core'
            ]
        },
        'foundation.topbar': {
            deps: [
            'foundation.core'
            ]
        },

        /* Vendor Scripts */
        'jquery.cookie': {
            deps: [
            'jquery'
            ]
        },
        'fastclick': {
            exports: 'FastClick'
        },
        'modernizr': {
            exports: 'Modernizr'
        },
        'placeholder': {
            exports: 'Placeholders'
        }
    },
    deps: [
    'main'
    ]
});