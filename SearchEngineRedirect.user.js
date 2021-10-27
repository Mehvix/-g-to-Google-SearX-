// ==UserScript==
// @name            Master redirect
// @version         2021-06-24-3
// @description     Easily swap between search engines with the press of a button while maintaining your current query.
// @author          Mehvix
// @include         https://search.disroot.org/search?q=*
// @include         https://search.brave.com/*?q=*
// @include         https://duckduckgo.com/?q=*
// @include         https://www.google.com/search?*
// @include         https://www.startpage.com/*search*
// @downloadURL     https://raw.githubusercontent.com/Mehvix/search-engine-redirect/master/SearchEngineRedirect.user.js
// @updateURL       https://raw.githubusercontent.com/Mehvix/search-engine-redirect/master/SearchEngineRedirect.user.js
// @supportURL      https://github.com/Mehvix/search-engine-redirect/issues
// @license         GNU General Public License v3
// ==/UserScript==

(function () {
    "use strict";

    const URL_DDG = "duckduckgo.com";
    const URL_GOOG = "www.google.com";
    const URL_GOOG_E = "encrypted.google.com";
    const URL_BRAVE = "search.brave.com";
    const URL_START = "www.startpage.com";
    const URL_SEARX = "search.disroot.org";

    document.addEventListener("keyup", function (event) {
        if ("input" === document.activeElement.tagName.toLowerCase()) {
            return;
        } else {
            let h = location.host;
            let q = "";

            switch (h) {
                case URL_DDG:
                    q = encodeURIComponent(
                        document.getElementById("search_form_input").value
                    );
                    break;
                case URL_GOOG:
                case URL_GOOG_E:
                    q = window.location.search.substring(3);
                    break;
                case URL_BRAVE:
                    q = encodeURIComponent(
                        document.getElementById("searchbox").value
                    );
                    break;
                case URL_START:
                    q = encodeURIComponent(document.getElementById("q").value);
                    break;
                case URL_SEARX:
                    q = encodeURIComponent(document.getElementById("q").value);
                    break;
            }

            let url = "";
            switch (event.key.toLowerCase()) {
                case "g":
                    url = h != URL_GOOG ? `${URL_GOOG_E}/search?q=` : "";
                    break;
                case "d":
                    url = h != URL_DDG ? `${URL_DDG}/?q=` : "";
                    break;
                case "b":
                    url = h != URL_BRAVE ? `${URL_BRAVE}/search?q=` : "";
                    break;
                case "s":
                    url = h != URL_START ? `${URL_START}/sp/search?query=` : "";
                    break;
                case "x":
                    url = h != URL_SEARX ? `${URL_SEARX}/search?q=` : "";
                    break;
            }
            if (url && q) document.location = "https://" + url + q;
        }
    });
})();
