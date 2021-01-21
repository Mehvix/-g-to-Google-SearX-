// ==UserScript==
// @name         DuckDuckGo redirect
// @version      2020-01-27
// @description  https://github.com/Mehvix/Search-Engine-Redirect
// @author       Mehvix
// @match        https://*duckduckgo.com/?q=*
// @license      GNU General Public License v3
// ==/UserScript==

(function () {
    "use strict";
    document.addEventListener("keyup", function (event) {
        if ("input" === document.activeElement.tagName.toLowerCase()) {
            return;
        } else if ("g" == event.key.toLowerCase()) {
            var q = document.getElementById("search_form_input");
            var url =
                "https://www.google.com/search?q=" + encodeURIComponent(q.value);
            // console.log(url);
            document.location = url;
        }

        //TODO I think you have to post searx
        // else if ('s' == event.key.toLowerCase()) {
        //     var q = document.getElementById('search_form_input');
        //     var url = 'https://search.disroot.com/?q=' + encodeURIComponent(q.value);
        //     // console.log(url);
        //     document.location = url;
        // }
    });
})();
