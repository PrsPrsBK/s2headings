document.addEventListener('click', evt => {
  // jumpToHeadings
});

const showHeadings = () => {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const tabId = tabs[0].id;
    browser.tabs.executeScript(tabId, { file: '/lib/browser-polyfill.min.js' }).then(() => {
      browser.tabs.executeScript(tabId, { file: '/content_scripts/picker.js' });
    }).then(() => {
      return browser.tabs.sendMessage(tabId, { task: 'pickup' });
    }).then(headings => {
      const board = document.querySelector('#display_pane');
      while(board.firstChild) {
        board.firstChild.remove();
      }
      const div = document.createElement('div');
      for (const h of headings) {
        const elm = document.createElement(`${h.tagName}`);
        elm.id = h.id;
        elm.textContent = h.text;
        div.appendChild(elm);
      }
      board.appendChild(div);
      return Promise.resolve();
    });
  });
};

showHeadings();
