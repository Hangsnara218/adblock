// JavaScript source code
chrome.webRequest.onBeforeRequest.addListener(
    function (details) { return { cancel: true } },
    { urls: ["*://*.adglare.com/*"] },
    ["blocking"]
)
