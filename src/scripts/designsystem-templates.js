/* global document, window */
/*
 Contains functionality required for all pages
 */

'use strict';

const global = {

    init: function () {
        // Setup components with non standard config requirements
        
        // Setup datepicker with icon path to the design system icon sprite
        const datePickers = [].slice.call(document.querySelectorAll('[data-module="ds-datepicker"]'));
        datePickers.forEach(datePicker => new window.DS.components.DSDatePicker(datePicker,{
            imagePath: '/plugin-assets/%40scottish-government%2Fdesign-system/dist/images/icons/'
        }).init());

        // Setup all remaining components
        var interval = window.setInterval(function() {
            if (window.DS) {
                window.DS.initAll();
                clearInterval(interval);
            }
        }, 50);

    }

};

global.init();