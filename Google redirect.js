// ==UserScript==
// @name         Google redirect
// @version      2020-01-27
// @description  https://github.com/Mehvix/Search-Engine-Redirect
// @author       Mehvix
// @include      https://*google.com/search?*
// @license      GNU General Public License v3
// ==/UserScript==

(function () {
    "use strict";
    document.addEventListener("keyup", function (event) {
        if ("input" === document.activeElement.tagName.toLowerCase()) {
            return;
        } else if ("d" == event.key.toLowerCase()) {
            var q = window.document.location.search;
            var url = "https://duckduckgo.com/" + q;
            // console.log(url);
            document.location = url;
        }
        //TODO I think you have to post searx
        // if ('s' == event.key.toLowerCase()) {
        //     var q = window.document.location.search;
        //     var url = '' + encodeURIComponent(q.value);
        //     // console.log(url);
        //     document.location = url;
        // }
    });
})();
