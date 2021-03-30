const jumpToHx = id => {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const tabId = tabs[0].id;
    browser.tabs.sendMessage(tabId, { task: 'jump', id });
  });
};

const showHeadings = () => {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const tabId = tabs[0].id;
    browser.tabs.executeScript(tabId, { file: '/lib/browser-polyfill.min.js' }).then(() => {
      return browser.tabs.executeScript(tabId, { file: '/content_scripts/picker.js' });
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
    }).catch(err => {
      const board = document.querySelector('#display_pane');
      while(board.firstChild) {
        board.firstChild.remove();
      }
      const div = document.createElement('div');
      div.textContent = err.message;
      board.appendChild(div);
    });
  });
};

document.addEventListener('click', evt => {
  if(evt.target.id) {
    jumpToHx(evt.target.id);
  }
});

showHeadings();
