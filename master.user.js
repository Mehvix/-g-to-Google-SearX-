// ==UserScript==
// @name            Master redirect
// @version         2021-06-24
// @description     https://github.com/Mehvix/search-engine-redirect
// @author          Mehvix
// @include         https://search.disroot.org/search?q=*
// @include         https://search.brave.com/search?q=*
// @include         https://duckduckgo.com/?q=*
// @include         https://www.google.com/search?*
// @downloadURL     https://raw.githubusercontent.com/Mehvix/search-engine-redirect/master/master.user.js
// @updateURL       https://raw.githubusercontent.com/Mehvix/search-engine-redirect/master/master.user.js
// @supportURL      https://github.com/Mehvix/search-engine-redirect/issues
// @license         GNU General Public License v3
// ==/UserScript==

(function () {
    "use strict";
    document.addEventListener("keyup", function (event) {
        if ("input" === document.activeElement.tagName.toLowerCase()) {
            return;
        } else {
            let h = location.host;
            let q = "";

            switch (h) {
                case "duckduckgo.com":
                    q = encodeURIComponent(
                        document.getElementById("search_form_input").value
                    );
                    break;
                case "www.google.com":
                    q = window.location.search.substring(3);
                    break;
                case "search.brave.com":
                    q = encodeURIComponent(
                        document.getElementById("searchbox").value
                    );
                    break;
                case "search.disroot.org":
                    q = encodeURIComponent(document.getElementById("q").value);
                    break;
            }

            let url = "";
            switch (event.key.toLowerCase()) {
                case "g":
                    url =
                        h != "www.google.com"
                            ? "https://www.google.com/search?q=" + q
                            : "";
                    break;
                case "d":
                    url =
                        h != "duckduckgo.com"
                            ? "https://duckduckgo.com/?q=" + q
                            : "";
                    break;
                case "b":
                    url =
                        h != "search.brave.com"
                            ? "https://search.brave.com/search?q=" + q
                            : "";
                    break;
                case "s":
                    url =
                        h != "search.disroot.org"
                            ? "https://search.disroot.org/search?q=" + q
                            : "";
                    break;
            }
            if (url && q) document.location = url;
        }
    });
})();
