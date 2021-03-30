const selectorStore = [
  [ 'https://github.com/', '#readme article' ],
];

const jumpToHx = id => {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const tabId = tabs[0].id;
    browser.tabs.sendMessage(tabId, { task: 'jump', id });
  });
};

const showHeadings = () => {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const tabId = tabs[0].id;
    const selector = selectorStore.find(pair => tabs[0].url.startsWith(pair[0]));
    browser.tabs.executeScript(tabId, { file: '/lib/browser-polyfill.min.js' }).then(() => {
      return browser.tabs.executeScript(tabId, { file: '/content_scripts/picker.js' });
    }).then(() => {
      return browser.tabs.sendMessage(tabId, { task: 'pickup', selector: selector ? selector[1] : undefined, });
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
      div.textContent = err.message ?? err;
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
