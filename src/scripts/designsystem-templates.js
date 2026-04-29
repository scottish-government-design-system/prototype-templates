/* global document, window */
/*
 Contains functionality required for all pages
 */
'use strict';

const global = {

    init: function () {

        var interval = window.setInterval(function() {
            if (window.DS) {
                window.DS.initAll();
                clearInterval(interval);
            }
        }, 50);

    }

};

global.init(); 