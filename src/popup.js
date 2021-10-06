function messaging(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "activate_description"}, function(response) {
          console.log(response.farewell);
        });
      });
}