browser.webNavigation.onCompleted.addListener(evt => {
  const url = new URL(evt.url);
  try {
    // try injecting, if exists
    browser.tabs.executeScript({
      file: "js/" + url.hostname + ".js"
    });
  } catch (err) {
    // file doesn't exist
    if (!err.message.includes("Unable to load script")) {
      console.log(err.message);
    }
  }
  
}, {url: [{schemes: ["http", "https"]}]});
