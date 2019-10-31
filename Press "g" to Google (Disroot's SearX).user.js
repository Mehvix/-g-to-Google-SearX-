// ==UserScript==
// @name         Press "g" to Google (Disroot's SearX)
// @version      0.1
// @description  Press "g" to Google for Disroot's SearX
// @author       Mehvix
// @match        https://search.disroot.org/*
// @grant        none
// @license      GNU General Public License v3
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keyup', function(event) {
        if ('input' === document.activeElement.tagName.toLowerCase()) {
            return;
        }
        if ('g' !== event.key) {
            return;
        }

        var q = document.getElementById('q');
        var url = 'https://www.google.com/search?q=' + encodeURIComponent(q.value);

        // console.log(url);

        document.location = url;
    });
})();
