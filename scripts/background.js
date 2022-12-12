const re = /https:\/\/google\.com\/.*/i
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      console.log(details.url);
      if(!details.url.match(re)){
        console.log("url matched")
        return {
          redirectUrl: "https://www.google.com/search?q=301redirect"
        }
      }
    },
    {urls: ['https://about.google/']},
    ['blocking']
  );