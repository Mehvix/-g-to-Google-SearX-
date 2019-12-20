// ==UserScript==
// @name         Google redirect
// @version      0.1
// @description  https://github.com/Mehvix/Search-Engine-Redirect
// @author       Mehvix
// @include     /^https?://(www.)?google(\.com?)?\.[a-z]{2,3}/.*$/
// @license      GNU General Public License v3
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keyup', function(event) {
        if ('input' === document.activeElement.tagName.toLowerCase()) {
            return;
        }
        if ('d' == event.key) {
            var q = window.document.location.search;
            var url = 'https://duckduckgo.com/' + q;
            // console.log(url);
            document.location = url;
        }
//        //TODO I think you have to post searx
//        if ('s' == event.key) {
//            var q = window.document.location.search;
//            var url = '' + encodeURIComponent(q.value);
//            // console.log(url);
//            document.location = url;
//        }
    });
})();
