// ==UserScript==
// @name         Press "g" to Google and "d" to DDG (Disroot's SearX)
// @version      0.1
// @description  Press "g" to Google and "d" to DDG for Disroot's SearX
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
        if ('d' == event.key) {
            var q = document.getElementById('q');
            var url = 'https://duckduckgo.com/?q=' + encodeURIComponent(q.value);
            // console.log(url);
            document.location = url;
        }
        if ('g' == event.key) {

            var q = document.getElementById('q');
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(q.value);
            // console.log(url);
            document.location = url;
        }
    });
})();
