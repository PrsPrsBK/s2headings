document.addEventListener('click', evt => {
  // jumpToHeadings
});

document.addEventListener('DOMContentLoaded', () => {
  browser.tabs.query({currentWindow: true, active: true}).then(tabs => {
    const tabId = tabs[0].id;
    browser.tabs.executeScript(tabId, {file: '/lib/browser-polyfill.min.js'})
      .then(() => {
        browser.tabs.executeScript(tabId, {file: '/content_scripts/picker.js'});
      })
      .then(() => {
        return browser.tabs.sendMessage(tabId, {task: 'pickup'});
      }).then(headings => {
        let text = '';
        for(const h of headings) { text += `${h.tagName}#${h.id}|${h.text}|, `; }
        document.querySelector('#display').textContent = `${Date.now()}-${text}`;
      });
  });
});
