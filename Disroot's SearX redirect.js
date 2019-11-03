// ==UserScript==
// @name         Disroot's SearX redirect
// @version      0.3
// @description  https://github.com/Mehvix/Search-Engine-Redirect
// @author       Mehvix
// @match        https://search.disroot.org/
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
