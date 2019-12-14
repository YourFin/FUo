"use strict";

// For cross browser compatibility
window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

// Pretend like we're chrome from the far far future so we don't get out of date
var duo_valid_user_agent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/10000.0.0 Safari/537.36';


function rewriteUserAgentHeader(e) {
    console.log("Rewriting user-agent for url: " + e.url);
    e.requestHeaders.forEach(function(header){
        if (header.name.toLowerCase() == "user-agent") {
            header.value = duo_valid_user_agent;
        }
    });
    return {requestHeaders: e.requestHeaders};
}

var targetPages = ["http://*.duosecurity.com/*",
                   "https://*.duosecurity.com/*"];
browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteUserAgentHeader,
    {urls: targetPages},
    ["blocking", "requestHeaders"]
);
