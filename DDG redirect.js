// ==UserScript==
// @name         DuckDuckGo redirect
// @version      0.1
// @description  https://github.com/Mehvix/Search-Engine-Redirect
// @author       Mehvix
// @match        https://duckduckgo.com/*
// @license      GNU General Public License v3
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keyup', function(event) {
        if ('input' === document.activeElement.tagName.toLowerCase()) {
            return;
        }
//        //TODO I think you have to post searx
//        if ('s' == event.key) {
//            var q = document.getElementById('search_form_input');
//            var url = 'https://search.disroot.com/?q=' + encodeURIComponent(q.value);
//            // console.log(url);
//            document.location = url;
//        }
        if ('g' == event.key) {
            var q = document.getElementById('search_form_input');
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(q.value);
            // console.log(url);
            document.location = url;
        }
    });
})();
