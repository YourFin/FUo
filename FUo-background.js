var duo_valid_user_agent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/10000.0.0 Safari/537.36';


function rewriteUserAgentHeader(e) {
    e.requestHeaders.forEach(function(header){
        if (header.name.toLowerCase() == "user-agent") {
            header.value = duo_valid_user_agent;
        }
    });
    return {requestHeaders: e.requestHeaders};
}

var targetPages = ["*://*.duosecurity.com/*"];
browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteUserAgentHeader,
    {urls: targetPages},
    ["blocking", "requestHeaders"]
);
