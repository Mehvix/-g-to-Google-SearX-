// ==UserScript==
// @name         Disroot's SearX redirect
// @version      2020-01-27
// @description  https://github.com/Mehvix/Search-Engine-Redirect
// @author       Mehvix
// @match        https://search.disroot.org/*
// @license      GNU General Public License v3
// ==/UserScript==

(function () {
    "use strict";
    document.addEventListener("keyup", function (event) {
        if ("input" === document.activeElement.tagName.toLowerCase()) {
            return;
        } else if ("d" == event.key.toLowerCase()) {
            var q = document.getElementById("q");
            var url =
                "https://duckduckgo.com/?q=" + encodeURIComponent(q.value);
            // console.log(url);
            document.location = url;
        } else if ("g" == event.key.toLowerCase()) {
            var q = document.getElementById("q");
            var url =
                "https://www.google.com/search?q=" +
                encodeURIComponent(q.value);
            // console.log(url);
            document.location = url;
        }
    });
})();
