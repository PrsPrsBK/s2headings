browser.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if(message.task === 'reqHeadings') {
    console.log(`request coming at ${Date.now()}`);
    browser.tabs.query({currentWindow: true, active: true}).then(tabs => {
      const tabId = tabs[0].id;
      console.log(`1 at ${Date.now()}`);
      browser.tabs.executeScript(tabId, {file: '/lib/browser-polyfill.min.js'})
        .then(() => {
          console.log(`2 at ${Date.now()}`);
          browser.tabs.executeScript(tabId, {file: '/content_scripts/picker.js'});
        })
        .then(() => {
          console.log(`3 at ${Date.now()}`);
          browser.tabs.sendMessage(tabId, {task: 'pickup'});
        });
    });
  }
  else if(message.task === 'jumpToHeadings') {
    console.log(`request to jump at ${Date.now()} - ${message.dstId}`);
  }
});

