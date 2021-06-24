// ==UserScript==
// @name            Brave Search redirect
// @version         2021-06-24
// @description     https://github.com/Mehvix/search-engine-redirect
// @author          Mehvix
// @match           https://search.brave.com/search?q=*
// @license         GNU General Public License v3
// ==/UserScript==

(function () {
    "use strict";
    document.addEventListener("keyup", function (event) {
        if ("input" === document.activeElement.tagName.toLowerCase()) {
            return;
        } else {
            let q = encodeURIComponent(
                document.getElementById("searchbox").value
            );
            switch (event.key.toLowerCase()) {
                case "g":
                    var url = "https://www.google.com/search?q=" + q;
                case "d":
                    var url = "https://duckduckgo.com/?q=" + q;
                // case "b":
                // var url = "https://search.brave.com/search?q=" + q;
                case "s":
                    var url = "https://search.disroot.org/search?q=" + q;
            }
            document.location = url;
        }
    });
})();
